import {Component} from 'angular2/core';
import {WonService} from './won.service';
import {OnInit} from 'angular2/core';
import {Won} from './won';

@Component({
  selector : 'won-app',
  providers: [WonService],
  template: `
  <div class="tab-content">
    <table class="table table-striped table-hover" id="won-list">
      <thead>
          <tr>
            <th>WON #</th>
            <th>WON Name</th>
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
          <td>{{won.division}} </td>
		  <td>{{won.location}} </td>          
          <td>{{won.service_practice}} </td>
		  <td>{{won.leave_calendar}}</td>
          <td><i class="fa fa-edit" title="Edit"></i><i class="fa fa-remove" title="Remove"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
`
})

export class WONComponent implements OnInit {
  constructor(private _wonService: WonService) { }
  wonList : Won[];

  ngOnInit() {
     //wonList = [{id : 101, name : 'LEXI'}, {id : 102, name : 'PROVATION'}];
      this.getWonList().subscribe(wonList => this.wonList = wonList); 
  }
  
  getWonList() {
    return this._wonService.getWonList();
  }
}