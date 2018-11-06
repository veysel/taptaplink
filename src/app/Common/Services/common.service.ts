import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    public GetServiceRootUrl(): string {
        return "https://api.myjson.com/bins/wzae6";
    }

}