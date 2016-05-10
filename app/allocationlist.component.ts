import {Component} from 'angular2/core';
import {WonService} from './won.service';
import {OnInit} from 'angular2/core';
import {Won} from './won';

@Component({
  selector : 'WON_List',
  providers: [WonService],
  template: `
    <table class="table table-striped table-hover" id="won-list">
      <thead>
          <tr>
            <th>WON #</th>
            <th>WON Name</th>
			<th>Start Date</th>
			<th>End Date</th>
            <th>Division</th>
            <th>Location</th>
            <th>Service Practice</th>
			<th>Leave Calendar</th>
            <th>Actions</th>
          </tr>
      </thead>
      <tbody>
        <tr *ngFor="#won of wonList">
          <td>{{won._id}}</td>
          <td>{{won.name}} </td>
		  <td>{{won.start_dt}} </td>
		  <td>{{won.end_dt}} </td>
          <td>{{won.division}} </td>
		  <td>{{won.location}} </td>          
          <td>{{won.service_practice}} </td>
		  <td>{{won.leave_calendar}}</td>
          <td><i class="fa fa-edit" title="Edit"></i><i class="fa fa-remove" title="Remove"></i></td>
        </tr>
      </tbody>
    </table>
`
})

export class AllocationListComponent implements OnInit {
  constructor(private _wonService: WonService) { }
  endclientList : IdName[];
  worklocationList : IdName[];
  servicepractiseList : IdName[];
  leavecalendarList : IdName[];
  allocationList : Allocation[];
  
  ngOnInit() {
      this._wonService.getEndClientList().subscribe(endclientList => this.endclientList = endclientList); 
	  this._wonService.getWorkLocationList().subscribe(worklocationList => this.worklocationList = worklocationList); 
	  this._wonService.getServicePracticeList().subscribe(servicepracticeList => this.servicepracticeList = servicepracticeList); 
	  this._wonService.getLeaveCalendarList().subscribe(leavecalendarList => this.leavecalendarList = leavecalendarList); 	  
	  this._wonService.getAllocationList().subscribe(allocationList => this.allocationList = allocationList); 	  
  }
 }