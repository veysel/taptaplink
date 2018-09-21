import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CommonService } from '../../Common/Services/common.service';

import { UserModel } from '../../Common/Models/user.model';

@Injectable()
export class RegisterService {
    constructor(
        private _http: Http,
        private _commonService: CommonService) { }

    public CheckUsername(username: string) {
        return this._http.get(this._commonService.GetServiceRootUrl() + "Register/CheckUsername?username=" + username).map(x => x.json());
    }

    public RegisterUser(userModel: UserModel) {
        return this._http.post(this._commonService.GetServiceRootUrl() + "Register/UserRegister", userModel).map(x => x.json());
    }
}