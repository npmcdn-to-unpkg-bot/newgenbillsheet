export class Allocation {
  	constructor(
    	public _id:string,
    	public won:string,
		public won_name:string,
		public emp_id:string,
		public emp_name:string,
		public bill_rate:number,
		public start_dt:string,
		public end_dt:string,
    	public end_client : string,
    	public work_location : string,
    	public service_practice : string,
		public leave_calendar : string
	) { }
}
