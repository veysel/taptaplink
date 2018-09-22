import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CommonService } from '../../Common/Services/common.service';

@Injectable()
export class HomeService {
    constructor(
        private _http: Http,
        private _commonService: CommonService) { }

    public GetPostList(userId: number, userKey: string) {
        return this._http.get(this._commonService.GetServiceRootUrl() + "Post/GetPostList?userId=" + userId + "&userKey=" + userKey).map(x => x.json());
    }
}