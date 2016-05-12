import {Component} from 'angular2/core';
import {WonService} from './won.service';
import {OnInit} from 'angular2/core';
import {Won} from './won';
import {CreateEditWONComponent} from './createeditWON.component';
import {WONListComponent} from './wonlist.component';

@Component({
  selector : 'won-app',
  providers: [WonService],
  directives : [WONListComponent,CreateEditWONComponent],
  template: `
  <div class="tab-content">
    <div *ngIf="showWons == true">
	 <button class="btn btn-primary btn-xs" (click)="addWon()">Create New WON</button>    
     <WON_List></WON_List>
    </div>
    
    <div *ngIf="showWons == false">
        <create_edit_won></create_edit_won>
    </div>
  </div>
`
})

export class WONComponent implements OnInit {
  constructor(private _wonService: WonService) { }
  wonList : Won[];
  showWons : true;
  wonAction : '';

  ngOnInit() {
    console.log('won on init');
	  showWons : true;
  }
  
  addWon() {
	  console.log('add new won');
    this.showWons = false;
  }
  
  editWon() {
    this.showWons = false;
	  this.wonAction = 'edit';
  }
}