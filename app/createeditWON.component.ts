import {Component} from 'angular2/core';
import {WonService} from './won.service';
import {OnInit} from 'angular2/core';
import {IdName} from './idname';
import {Won} from './won';

@Component({
  selector : 'create_edit_won',
  providers: [WonService],
  template: `			
	<form (ngSubmit)="onSubmit()">
          <div class="row">
              <h3>Create/Edit WON</h3>
                <div class="form-group col-xs-4">
                  <label for="name">WON #</label>
                  <input type="text" class="form-control" required [(ngModel)]="wonobj._id" (ngModelChange)="wonobj._id=$event">
                </div>
          	   <div class="form-group col-xs-4">
                  <label for="name">WON Name</label>
                  <input type="text" class="form-control" required [(ngModel)]="wonobj.name">
                </div>
				<div class="form-group col-xs-4">
                  <label for="name">WON Type</label>
                  <select class="form-control" required [(ngModel)]="wonobj.work_location">
          			     <option *ngFor="#wontype of wontypeList" [value]="wontype.name">{{wontype.name}}</option>
          		    </select>
                </div>
	       	   <div class="form-group col-xs-4">
                  <label for="name">WON Type</label>
                  <input type="text" class="form-control" required [(ngModel)]="wonobj.won_type">
                </div>
	
				<div class="form-group col-xs-4">
                  <label for="name">Start Date</label>
                  <input type="text" class="form-control" required [(ngModel)]="wonobj.start_dt">
                </div>
				<div class="form-group col-xs-4">
                  <label for="name">End Date</label>
                  <input type="text" class="form-control" required [(ngModel)]="wonobj.end_dt">
                </div>
          	   <div class="form-group col-xs-4">
                  <label for="name">End Client</label>
                  <select class="form-control" required [(ngModel)]="wonobj.end_client">
              			<option *ngFor="#endclient of endclientList" [value]="endclient.name">{{endclient.name}}</option>
              		</select>
                </div>
          	    <div class="form-group col-xs-4">
                  <label for="name">Work Location</label>
                  <select class="form-control" required [(ngModel)]="wonobj.work_location">
          			     <option *ngFor="#worklocation of worklocationList" [value]="worklocation.name">{{worklocation.name}}</option>
          		    </select>
                </div>
				<div class="form-group col-xs-4">
                  <label for="name">Service Practice</label>
                  <select class="form-control" required [(ngModel)]="wonobj.service_practice">
          			     <option *ngFor="#servicepractice of servicepracticeList" [value]="servicepractice.name">{{servicepractice.name}}</option>
          		    </select>
                </div>
          	  	<div class="form-group col-xs-4">
                  <label for="name">Leave Calendar</label>
                  <select class="form-control" required [(ngModel)]="wonobj.leave_calendar">
          			     <option *ngFor="#leavecalendar of leavecalendarList" [value]="leavecalendar.name">{{leavecalendar.name}}</option>
          		    </select>
                </div>           
               <button type="submit" class="btn btn-default">Submit</button>              
          </div> 
	</form>
`
})

export class CreateEditWONComponent implements OnInit {
  constructor(private _wonService: WonService) { }
  wontypeList : IdName[];
  endclientList : IdName[];
  worklocationList : IdName[];
  servicepractiseList : IdName[];
  leavecalendarList : IdName[];
  
  public wonobj: new Won({_id:3444,name:'sdfgh'});
  wonaction : string = 'A';
  
  ngOnInit() {
      this._wonService.getWonTypeList().subscribe(wontypeList => this.wontypeList = wontypeList); 
	  this._wonService.getEndClientList().subscribe(endclientList => this.endclientList = endclientList); 
	  this._wonService.getWorkLocationList().subscribe(worklocationList => this.worklocationList = worklocationList); 
	  this._wonService.getServicePracticeList().subscribe(servicepracticeList => this.servicepracticeList = servicepracticeList); 
	  this._wonService.getLeaveCalendarList().subscribe(leavecalendarList => this.leavecalendarList = leavecalendarList); 	  
  }  
  
   onSubmit() {
    var headers = new Headers();
	headers.append('Content-Type', 'application/json');   

    var data = JSON.stringify({ wonobj });

	this.http.post('http://localhost:3000/rest/newwon', data, {headers: headers})
    .subscribe();
  }
}