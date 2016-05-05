import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {WONComponent} from './won.component';
import {CreateEditWONComponent} from './createeditWON.component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector : 'billing-app',
  directives: [ROUTER_DIRECTIVES],
  providers:  [HTTP_PROVIDERS],
  template: `
  <ul class="items nav nav-tabs">
    <li class="won" [ngClass]="{active: activeTab == 'won'}">
       <a [routerLink]="['WON']" data-toggle="tab" (click)="selectTab('won')">WON Management</a>
    </li>
    <li class="timesheet" [ngClass]="{active: activeTab == 'timesheet'}">
       <a [routerLink]="['CreateEditWON']" data-toggle="tab" (click)="selectTab('timesheet')">Timesheet Entry</a>
    </li>
    <li class="reports" [ngClass]="{active: activeTab == 'reports'}">
       <a [routerLink]="['WON']" data-toggle="tab" (click)="selectTab('reports')">Reports</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
`
})

@RouteConfig([
  {path: '/won', name: 'WON', component: WONComponent}
  {path: '/createeditwon', name: 'CreateEditWON', component: CreateEditWONComponent}
])


export class AppComponent {
  activeTab : string;

  selectTab(tab) {
    this.activeTab = tab;
  }
}

