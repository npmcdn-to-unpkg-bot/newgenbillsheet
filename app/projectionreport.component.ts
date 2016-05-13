import {Component} from 'angular2/core';
import {WonService} from './won.service';
import {OnInit} from 'angular2/core';
import {Allocation} from './allocation';
import {LeaveCalendar} from './leavcalendar';

@Component({
  selector : 'Projection_Report',
  providers: [WonService],
  template: `
    <table class="table table-striped table-hover" id="won-list">
      <thead>
          <tr>
			<th>WON #</th>
            <th>WON Name</th>
			<th>Emp Id</th>
			<th>Emp Name</th>
			<th>Bill Rate</th>
			<th>Start Date</th>
			<th>End Date</th>
			<th>Leave Days</th>
			<th>Working Days</th>
          </tr>
      </thead>
      <tbody>
        <tr *ngFor="#allocation of allocationList">
          <td>{{allocation.won}}</td>
		  <td>{{allocation.wonname}}</td>
		  <td>{{allocation.emp_id}}</td>
		  <td>{{allocation.emp_name}}</td>
		  <td>{{allocation.bill_rate}}</td>
		  <td>{{allocation.start_date}}</td>
		  <td>{{allocation.end_date}}</td>          
		  <ul> 
		  <li *ngFor="#leaveobj of allocation.leaves">
			{{leaveobj}}
		  </li>
		  </ul>
		  <td>{{allocation.working_days - allocation.leaves.length}}</td>		  
        </tr>
      </tbody>
    </table>
`
})

export class ProjectionReportComponent implements OnInit {
  constructor(private _wonService: WonService) { }
  allocationList : Allocation[];
  
  ngOnInit() {
	this._wonService.getAllocationList().subscribe(allocationList => this.allocationList = allocationList); 
  }
 }