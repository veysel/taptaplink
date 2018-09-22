import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CommonService } from '../../Common/Services/common.service';

import { PostModel } from '../../Common/Models/post.model';

@Injectable()
export class HomeService {
    constructor(
        private _http: Http,
        private _commonService: CommonService) { }

    public GetPostList(userId: number, userKey: string) {
        return this._http.get(this._commonService.GetServiceRootUrl() + "Post/GetPostList?userId=" + userId + "&userKey=" + userKey).map(x => x.json());
    }

    public InsertNewPost(userId: number, userKey: string, content: string) {
        let tempModel: PostModel = new PostModel();
        tempModel.UserId = userId;
        tempModel.PostContent = userKey + "{---}" + content;

        return this._http.post(this._commonService.GetServiceRootUrl() + "Post/InsertNewPost", tempModel).map(x => x.json());
    }
}