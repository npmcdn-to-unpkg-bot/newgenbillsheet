import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Won} from './won';
import {IdName} from './idname';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WonService {
	constructor (private _http: Http) {}

	getEndClientList() :  Observable<IdName[]> {
		return this._http.get('/rest/endclient')
                    .map(this.extractData);
	}

	getWorkLocationList() :  Observable<IdName[]> {
		return this._http.get('/rest/worklocation')
                    .map(this.extractData);
	}

	getServicePracticeList() :  Observable<IdName[]> {
		return this._http.get('/rest/servicepractice')
                    .map(this.extractData);
	}

	getLeaveCalendarList() :  Observable<IdName[]> {
		return this._http.get('/rest/leavecalendar')
                    .map(this.extractData);
	}
	
	getWonList() :  Observable<Won[]> {
		return this._http.get('/rest/won')
                    .map(this.extractData);
	}
	
	getWon(num: Number) :  Observable<Won> {
		return this._http.get('/rest/won/num')
                    .map(this.extractData);
	}
	
	private extractData(res: Response) {
	    if (res.status < 200 || res.status >= 300) {
	      throw new Error('Bad response status: ' + res.status);
	    }
	    let body = res.json();
	    return body || [];
	}
	private handleError (error: any) {
	    let errMsg = error.message || 'Server error';
	    console.error(errMsg);
	    return Observable.throw(errMsg);
	}
}