export class MonthCalendar {
    	month:string,
		working_days:number;
		holidays:string[]
}

export class LeaveCalendar {
    	_id:number,
    	name:string,
		month_calendar:MonthCalendar[]
}




