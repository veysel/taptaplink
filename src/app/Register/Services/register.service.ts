import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CommonService } from '../../Common/Services/common.service';

@Injectable()
export class RegisterService {
    constructor(
        private _http: Http,
        private _commonService: CommonService) { }

    public CheckUsername(username: string) {
        return this._http.get(this._commonService.GetServiceRootUrl() + "Register/CheckUsername?username=" + username).map(x => x.json());
    }
}