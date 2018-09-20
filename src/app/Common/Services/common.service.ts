import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    public GetServiceRootUrl(): string {
        return "http://taptaplink.somee.com/api/";
    }

}