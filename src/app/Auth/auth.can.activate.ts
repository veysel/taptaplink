import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { StorageService } from '../Storage/Services/storage.service';

@Injectable()
export class AuthCanActivate implements CanActivate {

    constructor(
        private _storageService: StorageService,
        private _router: Router
    ) { }

    canActivate() {
        if (this._storageService.CheckStorage())
            return true;
        else
            this._router.navigate(["/login"]);
    }
}