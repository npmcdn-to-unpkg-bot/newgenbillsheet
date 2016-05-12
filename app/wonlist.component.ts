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
			      <th>WON Type</th>
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
		      <td>{{won.won_type}} </td>
		      <td>{{won.start_dt}} </td>
		      <td>{{won.end_dt}} </td>
          <td>{{won.division}} </td>
		      <td>{{won.location}} </td>          
          <td>{{won.service_practice}} </td>
		      <td>{{won.leave_calendar}}</td>
          <td><a href="#" (click)="editWon(won)"><i class="fa fa-edit" title="Edit"></i></a>
              <a href="#"><i class="fa fa-remove" title="Remove"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
`
})

export class WONListComponent implements OnInit {
  constructor(private _wonService: WonService) { }
  wonList : Won[];
  
  ngOnInit() {
	 this._wonService.getWonList().subscribe(wonList => this.wonList = wonList); 
  }

  editWon(won) {
    
  }
 }