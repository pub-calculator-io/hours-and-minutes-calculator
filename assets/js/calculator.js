function calculate() {
	let startTime = input.get('start_time_a').time("hh:mm").raw();
	let endTime = input.get('end_time_a').time("hh:mm").raw();
	if(!input.valid()) return;
	let totalSeconds = (endTime.getTime() - startTime.getTime()) / 1000;
	if(totalSeconds < 0) {
		endTime.setDate(endTime.getDate() + 1);
		totalSeconds = (endTime.getTime() - startTime.getTime()) / 1000;
	}
	printResults(totalSeconds);
}

function toDaysMinutesSeconds(totalSeconds){
	let result = '';
	const seconds = Math.floor(totalSeconds % 60);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
	const days = Math.floor(totalSeconds / (3600 * 24));
	if(days) {
		result += plural(days, 'days:day:days:days:days:days') + ' ';
	}
	result += plural(hours, 'hours:hour:hours:hours:hours:hours') + ' ';
	if(minutes) {
		result += plural(minutes, 'minutes:minute:minutes:minutes:minutes:minutes') + ' ';
	}
	if(seconds) {
		result += plural(seconds, 'seconds:second:seconds:seconds:seconds:seconds');
	}
	return result;
}

function printResults(totalSeconds, suffix = '') {
	_('result' + suffix).innerHTML = toDaysMinutesSeconds(totalSeconds);
	_('result-hours-minutes' + suffix).innerHTML = plural(Math.floor((totalSeconds % (3600 * 24)) / 3600), 'hours:hour:hours:hours:hours:hours') + ' ' + plural(Math.floor((totalSeconds % 3600) / 60), 'minutes:minute:minutes:minutes:minutes:minutes');
	_('result-in-hours' + suffix).innerHTML = plural(+(totalSeconds / 3600).toFixed(5), 'hours:hour:hours:hours:hours:hours');
	_('result-in-minutes' + suffix).innerHTML = plural(+(totalSeconds / 60).toFixed(5), 'minutes:minute:minutes:minutes:minutes:minutes');
}

function calculateDate() {
	let startDate = input.get('start_date').date().raw();
	let endDate = input.get('end_date').date().raw();
	let startTime = input.get('start_time_b').time('hh:mm').raw();
	let endTime = input.get('end_time_b').time('hh:mm').raw();
	if(!input.valid()) return;
	startDate.setHours(startTime.getHours());
	startDate.setMinutes(startTime.getMinutes());
	endDate.setHours(endTime.getHours());
	endDate.setMinutes(endTime.getMinutes());
	let totalSeconds = (endDate.getTime() - startDate.getTime()) / 1000;
	printResults(totalSeconds, '-date');
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
