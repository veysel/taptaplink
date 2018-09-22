import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CommonService } from '../../Common/Services/common.service';

import { UserModel } from '../../Common/Models/user.model';

@Injectable()
export class LoginService {
    constructor(
        private _http: Http,
        private _commonService: CommonService) { }

    public CheckLogin(username: string, password: string) {
        return this._http.get(this._commonService.GetServiceRootUrl() + "Login/CheckLogin?username=" + username + "&password=" + password).map(x => x.json());
    }

    public GetUserInfo(username: string, userKey: string) {
        return this._http.get(this._commonService.GetServiceRootUrl() + "User/GetUserInfo?username=" + username + "&userKey=" + userKey).map(x => x.json());
    }
}