export const msgDelay = 20 // Always leave at least 20 ms open between commands
export const keepAliveInterval = 200
export const SOM = '0'
export const EOM = '\r\n'
export const EndSession = 'exit'
export const sense = 'FF'
export const unknown = 'unknown'
export const cmd = {
	infoReq: '0F',
	stop: '10',
	play: '12',
	record: '13',
	pause: '14',
	search: '16',
	skip: '1A',
	directTrackSearchPreset: '23',
	clockDataPreset: '27',
	timeSearchPreset: '2C',
	repeatModeSelect: '37',
	remoteLocalModeSelect: '4C',
	playModeSelect: '4D',
	playModeSense: '4E',
	mechaStatusSense: '50',
	trackNumStatusSense: '55',
	currentTrackInfoSense: '57',
	currentTrackTimeSense: '58',
	titleSense: '59',
	totalTrackNoTotalTimeSense: '5D',
	keyboardTypeSense: '5F',
	errorSense: '78',
	cautionSense: '79',
	vendorCommand: '7F',
	projectSkip: '7F021A',
	projectSelect: '7F0223',
	projectCreate: '7F0240',
	projectRebuild: '7F0242',
	projectDelete: '7F0244',
	projectNoSenseStatus: '7F0255',
	projectNameSense: '7F025A',
	projectTotalNoSense: '7F025E',
	markSet: '7F0310',
	markDirectSkipPreset: '7F0323',
	markTimePreset: '7F0324',
	markNamePreset: '7F0329',
	markDelete: '7F0344',
	markNoSenseStatus: '7F0355',
	markTimeSense: '7F0358',
	markNameSense: '7F0359',
	markTotalNoSense: '7F035D',
	chaseSelect: '7F0600',
	tcStartTimePreset: '7F0610',
	tcUserBitsPreset: '7F0611',
	tcRestart: '7F0612',
	tcGeneratorModeSelect: '7F0620',
	tcFrameTypeSelect: '7F0621',
	tcOutputModeSelect: '7F0630',
	clockMasterSelect: '7F0640',
	wordThruSelect: '7F0648',
	recordFunctionSelect: '7F0800',
	inputMonitorFunctionSelect: '7F0801',
	bitLengthSelect: '7F0822',
	maxFileSizeSelect: '7F0823',
	pauseModeSelect: '7F0824',
	userWordSelect: '7F082A',
	timeIntervalMarkerTimePreset: '7F0832',
	audioOverMarkerSelect: '7F0841',
	timeInternalMarkerSelect: '7F0842',
	syncUnlockMarkerSelect: '7F0843',
	recFsSelect: '7F0850',
	userWordSense: '7F085A',
	fileNameSelect: '7F0860',
	mediaRemainSense: '7F1001',
	mediaFormat: '7F1044',
	auxAssignKeySelect: '7F1110',
	auxAssignKeyTallySelect: '7F1111',
	inputRoutingSelect: '7F1250',
	outputRoutingSelect: '7F1251',
	meterPeakHoldTimePreset: '7F1321',
	meterPeakClear: '7F1330',
	digitalReferenceLevelPreset: '7F1420',
	takeRename: '7F4200',
	takeErase: '7F4230',
	takeCopy: '7F4252',
}

export const resp = {
	password: 'Enter Password',
	loginSuccess: 'Login Successful',
	keepAlive: 'FA',
	infoReturn: '8F',
	clockDataReturn: 'A7',
	repeatModeSelectReturn: 'B7',
	remoteLocalModeReturn: 'CC',
	playModeReturn: 'CE',
	mechaStatusReturn: 'D0',
	trackNoStatusReturn: 'D5',
	trackCurrentInfoReturn: 'D7',
	trackCurrentTimeReturn: 'D8',
	titleReturn: 'D9',
	totalTrackNoTotalTimeReturn: 'DD',
	keyboardTypeReturn: 'DF',
	errorSenseRequest: 'F0',
	cautionSenseRequest: 'F1',
	illegalStatus: 'F2',
	changeStatus: 'F6',
	errorSenseReturn: 'F8',
	cautionSenseReturn: 'F9',
	venderCommandReturn: 'FF',
	projectCreateAck: 'FF02C0',
	projectRebuildAck: 'FF02C2',
	projectDeleteAck: 'FF02C4',
	projectNoReturn: 'FF02D5',
	projectNameReturn: 'FF02DA',
	projectTotalNoReturn: 'FF02DE',
	markNoReturn: 'FF03D5',
	markTimeReturn: 'FF03D8',
	markNameReturn: 'FF03D9',
	markTotalNoReturn: 'FF03DD',
	chaseReturn: 'FF0680',
	tcStartTimeReturn: 'FF0690',
	tcUserBitsReturn: 'FF0691',
	tcGeneratorModeReturn: 'FF06A0',
	tcFrameTypeReturn: 'FF06A1',
	tcOutputModeReturn: 'FF06B0',
	clockMasterReturn: 'FF06C0',
	wordThruReturn: 'FF06C8',
	recordFunctionReturn: 'FF0880',
	inputMonitorFunctionReturn: 'FF0881',
	bitLengthReturn: 'FF08A2',
	maxFileSizeReturn: 'FF08A3',
	pauseModeReturn: 'FF08A4',
	timeIntervalMarkerTimeReturn: 'FF08B2',
	audioMarkerReturn: 'FF08C1',
	timeIntervalMarkerReturn: 'FF08C2',
	syncUnlockMarkerReturn: 'FF08C3',
	recFsReturn: 'FF08D0',
	userWordReturn: 'FF08DA',
	fileNameReturn: 'FF08E0',
	mediaRemainReturn: 'FF1081',
	mediaFormatAck: 'FF10C4',
	auxAssignKeyReturn: 'FF1190',
	auxAssignTallyReturn: 'FF1191',
	inputRoutingReturn: 'FF12D0',
	outputRoutingReturn: 'FF12D1',
	meterPeakTimeReturn: 'FF13A1',
	digitalReferenceLevelReturn: 'FF14A0',
	takeRenameAck: 'FF4280',
	takeEraseAck: 'FF42B0',
	takeCopyAck: 'FF42D2',
	psuError: 'FF68F6', //undocumented message, observed in logs
}

export const respParam = {
	recordModeSelect: {
		record: '00',
		recordPause: '01',
		takeSplit: '02',
	},
	pauseSelect: {
		pause: '01',
	},
	searchModeSelect: {
		forwardNormal: '00',
		reverseNormal: '01',
		forwardHigh: '10',
		reverseHigh: '11',
	},
	skipModeSelect: {
		trackSkipNext: '00',
		trackSkipPrevious: '01',
		markSkipNext: '20',
		markSkipPrevious: '21',
	},
	repeatModeSelectReturn: {
		off: '00',
		normal: '01',
		vamping: '21',
	},
	remoteLocalSelectReturn: {
		remote: '00',
		local: '01',
	},
	playModeReturn: {
		allTake: '00',
		oneTake: '01',
	},
	currentTrackTimeSelect: {
		elapsedTime: '10',
		remainTime: '11',
		totalElapsedTime: '12',
		totalRemainTime: '13',
		timecodeTime: '14',
	},
	projectSkipModeSelect: {
		projectNext: '00',
		projectPrevious: '01',
	},
	mechaStatusReturn: {
		noMedia: '00',
		stop: '10',
		play: '11',
		readyOn: '12',
		cue: '28',
		review: '29',
		record: '81',
		recordReady: '82',
		infomationWriting: '83',
		other: 'FF',
	},
	keyboardTypeReturn: {
		japanese: '00',
		english: '01',
	},
	changeStatus: {
		mechaStatus: '00',
		track: '03',
	},
	errorSenseReturn: {
		noError: '0-00',
		recError: '1-01',
		deviceError: '1-02',
		infoWriteError: '1-09',
		otherError: '1-FF',
	},
	cautionSenseReturn: {
		noCaution: '0-00',
		mediaError: '1-02',
		mediaFull: '1-06',
		takeFull: '1-07',
		digitalUnlock: '1-09',
		cantRec: '1-0B',
		writeProtected: '1-0C',
		notExecute: '1-0D',
		cantEdit: '1-0F',
		cantSelect: '1-13',
		trackProtected: '1-14',
		nameFull: '1-16',
		playError: '1-1E',
		otherCaution: '1-FF',
	},
	projectSelect: {
		preamble: '0000',
	},
	projectDelete: {
		preamble: '0000',
	},
	createProjectACK: {
		start: '00',
		endOK: '11',
		endNG: '12',
	},
	rebuildProjectACK: {
		start: '00',
		endOK: '11',
		endNG: '12',
	},
	deleteProjectACK: {
		start: '00',
		endOK: '11',
		endNG: '12',
	},
	chaseReturn: {
		off: '00',
		on: '01',
	},
	tcGeneratorModeReturn: {
		freeRun: '00',
		freeOnce: '01',
		timeOfDay: '02',
		jamSync: '03',
		regen: '04',
		recRun: '05',
		tcSyncRec: '06',
	},
	tcFrameTypeReturn: {
		23976: '23',
		24: '24',
		25: '25',
		DF2997: '29DF',
		2997: '29',
		DF30: '30DF',
		30: '30',
	},
	tcOutputModeReturn: {
		generator: '00',
		play: '01',
	},
	clockMasterReturn: {
		internal: '00',
		word: '01',
		video: '02',
		slot1: '03',
		slot2: '04',
	},
	wordThruReturn: {
		wordOutTermOn: '00',
		wordOutTermOff: '01',
		wordThruTermOff: '11',
	},
	bitLengthReturn: {
		16: '16',
		24: '24',
	},
	pauseModeReturn: {
		split: '00',
		noSplit: '01',
	},
	audioOverMarkerReturn: {
		off: '00',
		on: '01',
	},
	timeIntervalMarkerReturn: {
		off: '00',
		on: '01',
	},
	syncUnlockMarkerReturn: {
		off: '00',
		on: '01',
	},
	recFsReturn: {
		44: '440000',
		48: '480000',
		88: '880000',
		96: '960000',
	},
	fileNameReturn: {
		dateTime: '00',
		folder: '01',
		userWord: '11',
	},
	mediaRemainSenseMode: {
		ssd: '00',
		usb: '01',
	},
	mediaFormatMode: {
		quickFormatSSD: '0000',
		fullFormatSSD: '0100',
	},
	mediaFormatAck: {
		start: '00',
		endOK: '11',
		endNG: '12',
	},
	auxAssignKeyReturn: {
		key: {
			1: '01',
			2: '02',
			3: '03',
			4: '04',
			5: '05',
			6: '06',
		},
		mode: {
			playPause: '00',
			pause: '01',
			rec: '02',
			faderRec: '03',
			faderStart: '04',
			rew: '05',
			ffwd: '06',
			takeSkipBack: '07',
			takeSkipFwd: '08',
			markSkipBack: '09',
			markSkipFwd: '0A',
			takeMarkSkipBack: '0B',
			takeMarkSkipFwd: '0C',
			mark: '0D',
		},
	},
	auxAssignTallyReturn: {
		tally: {
			1: '01',
			2: '02',
			3: '03',
			4: '04',
			5: '05',
		},
		mode: {
			stop: '00',
			play: '01',
			pause: '02',
			rec: '03',
			eom: '04',
			error: '05',
			eomError: '06',
		},
	},
	meterPeakTimeReturn: {
		0: '00',
		1: '01',
		2: '02',
		3: '03',
		4: '04',
		5: '05',
		6: '06',
		7: '07',
		8: '08',
		9: '09',
		10: '10',
		inf: 'FE',
	},
	digitalReferenceLevelReturn: {
		9: '09',
		14: '14',
		16: '16',
		18: '18',
		20: '20',
	},
	directTrackSearchPresetMode: {
		stop: '10',
		play: '12',
		pause: '14',
	},
	takeRenameAck: {
		start: '00',
		endOK: '11',
		endNG: '12',
	},
	takeEraseAck: {
		start: '00',
		endOK: '11',
		endNG: '12',
	},
	takeCopyAck: {
		start: '00',
		endOK: '11',
		endNG: '12',
	},
	psuErrorReturn: {
		ok: '0700',
		error: '0701',
	},
	recordFunction: {
		all: {
			on: '00001',
			off: '00000',
		},
		startChannel: {
			1: '0100',
		},
		on: '1',
		off: '0',
	},
}

export const cmdOnLogin = [cmd.errorSense, cmd.cautionSense, cmd.mechaStatusSense, cmd.trackNumStatusSense]
