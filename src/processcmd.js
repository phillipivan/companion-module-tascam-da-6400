const { resp, cmd, SOM, cmdOnLogin } = require('./consts.js')

module.exports = {
	async processCmd(chunk) {
		let reply = chunk.toString()
		this.log('debug', `response recieved: ${reply}`)
		//let varList = []
		switch (reply) {
			case resp.password:
				this.addCmdtoQueue(this.config.password)
				return true
			case resp.loginSuccess:
				this.updateStatus('ok', 'Logged in')
				this.log('info', 'OK: Logged In')
				for (let i = 0; i < cmdOnLogin.length; i++) {
					this.addCmdtoQueue(SOM + cmdOnLogin[i])
				}
				return true
		}
		while (reply[0] != SOM && reply.length > 0) {
			reply = reply.slice(1)
		}
		if (reply.length == 0) {
			return false
		}
		let response = reply.substr(1, 2)
		let venderCmd = reply.substr(1, 6)
		let param = []
		let varList = []
		switch (response) {
			case resp.keepAlive:
				this.log('debug', `keepAlive`)
				break
			case resp.infoReturn:
				break
			case resp.repeatModeSelectReturn:
				break
			case resp.playModeReturn:
				break
			case resp.mechaStatusReturn:
				param[0] = reply.substr(3, 2)
				this.recorder.mechaStatus = param[0] === undefined ? this.recoder.mechaStatus : param[0]
				this.checkFeedbacks('mechaStatus')
				break
			case resp.trackNoStatusReturn:
				param[0] = parseInt(reply[7] + reply[8] + reply[5] + reply[6])
				this.recorder.track.number = isNaN(param[0]) ? this.recorder.track.number : param[0]
				varList['trackNo'] = this.recorder.track.number
				this.setVariableValues(varList)
				break
			case resp.trackCurrentInfoReturn:
				break
			case resp.trackCurrentTimeReturn:
				break
			case resp.titleReturn:
				break
			case resp.totalTrackNoTotalTimeReturn:
				break
			case resp.keyboardTypeReturn:
				break
			case resp.errorSenseRequest:
				this.log('debug', `errorSenseRequest`)
				this.addCmdtoQueue(SOM + cmd.errorSense)
				break
			case resp.cautionSenseRequest:
				this.log('debug', `cautionSenseRequest`)
				this.addCmdtoQueue(SOM + cmd.cautionSense)
				break
			case resp.illegalStatus:
				this.log('warn', 'Illegal Status: Invalid Command')
				break
			case resp.changeStatus:
				param[0] = reply.substr(3, 2)
				if (param[0] == '00') {
					//mecha status changed
					this.addCmdtoQueue(SOM + cmd.mechaStatusSense)
				} else if (param[0] == '03') {
					//take number changed
					this.addCmdtoQueue(SOM + cmd.trackNumStatusSense)
				}
				break
			case resp.errorSenseReturn:
				param[0] = reply[6] + '-' + reply[3] + reply[4]
				switch (param[0]) {
					case '0-00':
						this.log('info', `errorSenseReturn: No Error`)
						//no error
						break
					case '0-01':
						//rec error
						this.log('warn', `errorSenseReturn: Record Error`)
						break
					case '1-02':
						//device error
						this.log('warn', `errorSenseReturn: Device Error`)
						break
					case '1-09':
						//info write error
						this.log('warn', `errorSenseReturn: Infomation Write Error`)
						break
					case '1-FF':
						//Other Error
						this.log('warn', `errorSenseReturn: Other Error`)
						break
					default:
						//Shouldn't occur
						this.log('warn', `errorSenseReturn: Switch Default: ${param[0]}`)
				}
				this.recorder.error = param[0]
				this.checkFeedbacks('error')
				break
			case resp.cautionSenseReturn:
				param[0] = reply[6] + '-' + reply[3] + reply[4]
				switch (param[0]) {
					case '0-00':
						//no caution
						this.log('info', `cautionSenseReturn: No Caution`)
						break
					case '0-01':
						//Media Error
						this.log('warn', `cautionSenseReturn: Media Error`)
						break
					case '1-06':
						//Media Full
						this.log('warn', `cautionSenseReturn: Media Full`)
						break
					case '1-07':
						//Take Full
						this.log('warn', `cautionSenseReturn: Take Full`)
						break
					case '1-09':
						//Digital Unlock
						this.log('warn', `cautionSenseReturn: Digital Unlock`)
						break
					case '1-0B':
						//Can't REC
						this.log('warn', `cautionSenseReturn: Can't REC`)
						break
					case '1-0C':
						//Write Protected
						this.log('warn', `cautionSenseReturn: Write Protected`)
						break
					case '1-0D':
						//Not Execute
						this.log('warn', `cautionSenseReturn: Not Execute`)
						break
					case '1-0F':
						//Can't Edit
						this.log('warn', `cautionSenseReturn: Can't Edit`)
						break
					case '1-13':
						//Can't Select
						this.log('warn', `cautionSenseReturn: Can't Select`)
						break
					case '1-14':
						//Track Protected
						this.log('warn', `cautionSenseReturn: Track Protected`)
						break
					case '1-16':
						//Name Full
						this.log('warn', `cautionSenseReturn: Name Full`)
						break
					case '1-1E':
						//Play Error
						this.log('warn', `cautionSenseReturn: Play Error`)
						break
					case '1-FF':
						//Other Caution
						this.log('warn', `cautionSenseReturn: Other Caution`)
						break
					default:
						//Shouldn't occur
						this.log('warn', `cautionSenseReturn: Switch Default: ${param[0]}`)
				}
				this.recorder.caution = param[0]
				this.checkFeedbacks('caution')
				break
			case resp.venderCommandReturn:
				switch (venderCmd) {
					case resp.projectCreateReturn:
						break
					case resp.projectRebuildAck:
						this.log('debug', `projectRebuildAck`)
						break
					case resp.projectDeleteAck:
						this.log('debug', `projectDeleteAck`)
						break
					case resp.projectNoReturn:
						break
					case resp.projectNameReturn:
						break
					case resp.projectTotalNoReturn:
						break
					case resp.markNoReturn:
						break
					case resp.markTimeReturn:
						break
					case resp.markNameReturn:
						break
					case resp.markTotalNoReturn:
						break
					case resp.chaseReturn:
						break
					case resp.tcStartTimeReturn:
						break
					case resp.tcUserBitsReturn:
						break
					case resp.tcGeneratorModeReturn:
						break
					case resp.tcFrameTypeReturn:
						break
					case resp.tcOutputModeReturn:
						break
					case resp.clockMasterReturn:
						break
					case resp.wordThruReturn:
						break
					case resp.recordFunctionReturn:
						break
					case resp.inputMonitorFunctionReturn:
						break
					case resp.bitLengthReturn:
						break
					case resp.maxFileSizeReturn:
						break
					case resp.pauseModeReturn:
						break
					case resp.timeIntervalMarkerTimeReturn:
						this.log('debug', `timeIntervalMarkerTimeReturn`)
						break
					case resp.audioMarkerReturn:
						this.log('debug', `audioMarkerReturn`)
						break
					case resp.timeIntervalMarkerReturn:
						this.log('debug', `timeIntervalMarkerReturn`)
						break
					case resp.syncUnlockMarkerReturn:
						this.log('debug', `syncUnlockMarkerReturn`)
						break
					case resp.recFsReturn:
						break
					case resp.userWordReturn:
						break
					case resp.fileNameReturn:
						break
					case resp.mediaRemainReturn:
						break
					case resp.mediaFormatAck:
						this.log('debug', `mediaFormatAck`)
						break
					case resp.auxAssignKeyReturn:
						break
					case resp.auxAssignTallyReturn:
						break
					case resp.inputRoutingReturn:
						break
					case resp.outputRoutingReturn:
						break
					case resp.meterPeakTimeReturn:
						break
					case resp.digitalReferenceLevelReturn:
						break
					case resp.takeRenameAck:
						this.log('debug', `takeRenameAck`)
						break
					case resp.takeEraseAck:
						this.log('debug', `takeEraseAck`)
						break
					case resp.takeCopyAck:
						this.log('debug', `takeCopyAck`)
						break
					case resp.psuError:
						this.recorder.psuError = reply.substr(7, 4)
						this.checkFeedbacks('psu')
						break
					default:
						this.log('debug', `unknown vender command: ${reply}`)
				}
				break
			default:
				this.log('warn', `Unexpected response from unit: ${reply}`)
		}
	},
}
