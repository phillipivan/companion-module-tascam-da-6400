const { InstanceStatus, TCPHelper } = require('@companion-module/base')
const { msgDelay, cmd, EOM, EndSession, keepAliveInterval } = require('./consts.js')

module.exports = {
	async addCmdtoQueue(msg) {
		if (msg !== undefined && msg.length > 2) {
			await this.cmdQueue.push(cmd)
			return true
		}
		this.log('warn', `Invalid command: ${msg}`)
		return false
	},

	async processCmdQueue() {
		if (this.cmdQueue.length > 0 && this.clearToTx) {
			//dont send command if still waiting for response from last command
			this.sendCommand(await this.cmdQueue.splice(0, 1))
			this.cmdTimer = setTimeout(() => {
				this.processCmdQueue()
			}, msgDelay)
			return true
		}
		// run at double speed while the queue is empty for better responsiveness
		this.cmdTimer = setTimeout(() => {
			this.processCmdQueue()
		}, msgDelay / 2)
		return false
	},

	async sendCommand(msg) {
		if (msg !== undefined) {
			if (this.socket !== undefined && this.socket.isConnected) {
				this.log('debug', `Sending Command: ${msg}`)
				this.socket.send(msg + EOM)
				return true
			} else {
				this.log('warn', `Socket not connected, tried to send: ${msg}`)
			}
		} else {
			this.log('warn', 'Command undefined')
		}
		return false
	},

	//queries made on initial connection.
	async queryOnConnect() {
		this.addCmdtoQueue(EOM)
		return true
	},

	keepAlive() {
		//request alive notifications
		this.addCmdtoQueue(cmd.mechaStatusSense)
		this.keepAliveTimer = setTimeout(() => {
			this.keepAlive()
		}, keepAliveInterval)
	},

	initTCP() {
		this.receiveBuffer = ''
		if (this.socket !== undefined) {
			this.sendCommand(EndSession)
			this.socket.destroy()
			delete this.socket
		}
		if (this.config.host) {
			this.log('debug', 'Creating New Socket')

			this.updateStatus(`Connecting to DA-6400: ${this.config.host}`)
			this.socket = new TCPHelper(this.config.host, this.config.port)

			this.socket.on('status_change', (status, message) => {
				this.updateStatus(status, message)
			})
			this.socket.on('error', (err) => {
				this.log('error', `Network error: ${err.message}`)
				clearTimeout(this.keepAliveTimer)
			})
			this.socket.on('connect', () => {
				this.log('info', `Connected to ${this.config.host}`)
				this.queryOnConnect()
				this.keepAliveTimer = setTimeout(() => {
					this.keepAlive()
				}, keepAliveInterval)
			})
			this.socket.on('data', (chunk) => {
				let i = 0,
					line = '',
					offset = 0
				this.receiveBuffer += chunk
				while ((i = this.receiveBuffer.indexOf(EOM, offset)) !== -1) {
					line = this.receiveBuffer.substr(offset, i - offset)
					offset = i + 1
					this.processCmd(line.toString())
				}
			})
		} else {
			this.updateStatus(InstanceStatus.BadConfig)
		}
	},
}
