import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {WONComponent} from './won.component';
import {CreateEditWONComponent} from './createeditWON.component';
import {ReportComponent} from './report.component';
import {ProjectionReportComponent} from './projectionreport.component';
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
    <li class="allocations" [ngClass]="{active: activeTab == 'allocations'}">
       <a [routerLink]="['WON']" data-toggle="tab" (click)="selectTab('won')">Associate Allocations</a>
    </li>
    <li class="reports" [ngClass]="{active: activeTab == 'Reports'}">
       <a [routerLink]="['Reports']" data-toggle="tab" (click)="selectTab('reports')">Reports</a>
    </li>	
  </ul>
  <router-outlet></router-outlet>
`
})

@RouteConfig([
  {path: '/won', name: 'WON', component: WONComponent}
  {path: '/allocations', name: 'AllocationList', component: WONComponent}
  {path: '/Reports', name: 'Reports', component: ReportComponent}
])

export class AppComponent {
  activeTab : string;

  selectTab(tab) {
    this.activeTab = tab;
  }
}

