import {Component} from 'angular2/core';
import {WonService} from './won.service';
import {OnInit} from 'angular2/core';
import {IdName} from './idname';

@Component({
  selector : 'create_edit_won',
  providers: [WonService],
  template: `
			
<div class="container">
    <h1>Create/Edit WON</h1>
    <form>
      <div class="form-group">
        <label for="name">WON #</label>
        <input type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="name">WON #</label>
        <input type="text" class="form-control" required>
      </div>
	  <div class="form-group">
        <label for="name">WON Name</label>
        <input type="text" class="form-control" required>
      </div>
	  <div class="form-group">
        <label for="name">End Client</label>
        <select class="form-control" required>
			<option *ngFor="#endclient of endclientList" [value]="endclient.name">{{endclient.name}}</option>
		</select>
      </div>
	  <div class="form-group">
        <label for="name">Work Location</label>
        <select class="form-control" required>
			<option *ngFor="#worklocation of worklocationList" [value]="worklocation.name">{{worklocation.name}}</option>
		</select>
      </div>
	  	  <div class="form-group">
        <label for="name">Leave Calendar</label>
        <select class="form-control" required>
			<option *ngFor="#leavecalendar of leavecalendarList" [value]="leavecalendar.name">{{leavecalendar.name}}</option>
		</select>
      </div>
 
	  <div class="form-group">
        <label for="name">Service Practice</label>
        <select class="form-control" required>
			<option *ngFor="#servicepractice of servicepracticeList" [value]="servicepractice.name">{{servicepractice.name}}</option>
		</select>
      </div>
     <button type="submit" class="btn btn-default">Submit</button>
    </form>
</div>  
`
})

export class CreateEditWONComponent implements OnInit {
  constructor(private _wonService: WonService) { }
  endclientList : IdName[];
  worklocationList : IdName[];
  servicepractiseList : IdName[];
  leavecalendarList : IdName[];

  ngOnInit() {
      this._wonService.getEndClientList().subscribe(endclientList => this.endclientList = endclientList); 
	  this._wonService.getWorkLocationList().subscribe(worklocationList => this.worklocationList = worklocationList); 
	  this._wonService.getServicePracticeList().subscribe(servicepracticeList => this.servicepracticeList = servicepracticeList); 
	  this._wonService.getLeaveCalendarList().subscribe(wonList => this.leavecalendarList = leavecalendarList); 	  
  }  
}