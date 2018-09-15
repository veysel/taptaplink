import { Injectable } from '@angular/core';

import { StorageModel } from '../Models/storage.model';

@Injectable()
export class StorageService {

    private _StorageName: string = "TapTapStorage";

    public CheckStorage(): boolean {
        return this.GetStorage() ? true : false;
    }

    public GetStorage(): StorageModel {
        return JSON.parse(localStorage.getItem(this._StorageName));
    }

    public SetStorage(storageModel: StorageModel): void {
        localStorage.setItem(this._StorageName, JSON.stringify(storageModel));
    }

    public ClearStorage(): void {
        localStorage.removeItem(this._StorageName);
    }

}