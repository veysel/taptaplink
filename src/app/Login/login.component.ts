import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './Services/login.service';
import { StorageService } from '../Storage/Services/storage.service';

import { UserModel } from '../Common/Models/user.model';
import { StorageModel } from '../Storage/Models/storage.model';

@Component({
    selector: 'login',
    templateUrl: './login.template.html'
})
export class LoginComponent {

    public form = {
        options: {
            alert: ""
        },
        username: "",
        password: ""
    };

    constructor(
        private _router: Router,
        private _loginService: LoginService,
        private _storageService: StorageService
    ) {

        if (this._storageService.CheckStorage()) {
            this._router.navigate(["/home"]);
        }

    }

    public LoginButtonClick(): void {
        this.form.options.alert = "";

        if (!this.form.username || !this.form.password) {
            this.form.options.alert = "Lütfen tüm alanları doldurun !";
            return;
        }

        this._loginService.CheckLogin(this.form.username, this.form.password).subscribe(result => {

            if (result) {

                this._loginService.GetUserInfo(this.form.username, result).subscribe(resultUser => {
                    let tempUser: UserModel = resultUser;

                    if (tempUser.UserId == 0) {
                        this.form.options.alert = "Giriş denemesi başarısız !";
                        return;
                    }
                    else {
                        let tempStorageModel: StorageModel = new StorageModel();
                        tempStorageModel.UserKey = result;
                        tempStorageModel.UserId = tempUser.UserId;
                        tempStorageModel.Username = tempUser.Username;
                        tempStorageModel.Name = tempUser.Name;
                        tempStorageModel.Surname = tempUser.Surname;
                        tempStorageModel.Password = tempUser.Password;

                        this._storageService.SetStorage(tempStorageModel);
                        this._router.navigate(["/home"]);
                    }
                });

            }
            else {
                this.form.options.alert = "Giriş denemesi başarısız !";
                return;
            }

        });

    }

    public RegisterButtonClick(){
        this._router.navigate(["/register"]);
    }

}