import {Component} from 'angular2/core';
import {WonService} from './won.service';
import {OnInit} from 'angular2/core';
import {Won} from './won';
import {CreateEditWONComponent} from './createeditWON.component';

@Component({
  selector : 'won-app',
  providers: [WonService],
  directives : [CreateEditWONComponent],
  template: `
  <div class="tab-content">
    <button class="btn btn-primary btn-xs" (click)="createWon()">Create New WON</button>
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
    <div *ngIf="editWon == true">
      <div class="modal-body">
        <create_edit_won></create_edit_won>
      </div>
    </div>
  </div>
`
})

export class WONComponent implements OnInit {
  constructor(private _wonService: WonService) { }
  wonList : Won[];
  editWon : false;

  ngOnInit() {
    this.getWonList().subscribe(wonList => this.wonList = wonList); 
  }
  
  getWonList() {
    return this._wonService.getWonList();
  }

  createWon() {
    this.editWon = true;
  }
}