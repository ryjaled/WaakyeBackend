import moment from 'moment';

export function setTime(){

	return moment().format('YYYY-MM-DD h:mm:ss a')
	
}