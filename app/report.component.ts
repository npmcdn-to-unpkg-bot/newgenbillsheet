import {Component} from 'angular2/core';
import {WonService} from './won.service';
import {OnInit} from 'angular2/core';
import {ProjectionReportComponent} from './projectionreport.component';

@Component({
  selector : 'report-app',
  providers: [WonService],
  directives : [ProjectionReportComponent],
  template: `
  <div class="tab-content">
    <div *ngIf="currentReport == 'PROJECTION'">
	 <button class="btn btn-primary btn-xs" (click)="ShowProjectionReport()">Show Projection Report</button>    
	 <button class="btn btn-primary btn-xs" (click)="ShowRevenueDiffReport()">Show Revenue Difference Report</button>    
     <Projection_Report></Projection_Report>
    </div>
    
    <div *ngIf="currentReport == 'REVDIFF'">
        
    </div>
  </div>
`
})

export class ReportComponent implements OnInit {
  currentReport : string = '';
  constructor(private _wonService: WonService) { }
  
  ngOnInit() {
    console.log('Report on init');
	currentReport = 'PROJECTION';
  }
  
  ShowProjectionReport() {
	console.log('Show Proj Report');
    this.currentReport = 'PROJECTION';
  }
  
  ShowRevenueDiffReport() {
    console.log('Show Rev Diff Report');
    this.currentReport = 'REVDIFF';
  }
}