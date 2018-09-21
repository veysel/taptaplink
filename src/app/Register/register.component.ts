import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from './Services/register.service';

import { UserModel } from '../Common/Models/user.model';

@Component({
    selector: 'register',
    templateUrl: './register.template.html'
})
export class RegisterComponent {

    public form = {
        options: {
            alert: ""
        },
        username: "",
        name: "",
        surname: "",
        password: ""
    };

    constructor(
        private _registerService: RegisterService,
        private _router: Router
    ) { }

    public SaveButtonClick(): void {
        this.form.options.alert = "";

        if (!this.form.username || !this.form.name || !this.form.surname || !this.form.password) {
            this.form.options.alert = "Lütfen tüm alanları doldurun !";
            return;
        }

        this._registerService.CheckUsername(this.form.username).subscribe(result => {
            if (result) {
                // Kayıtlı kullanıcı adı varsa
                this.form.options.alert = "Kullanıcı adı daha önceden alınmış !";
            }
            else {
                let newUser: UserModel = new UserModel();

                newUser.Username = this.form.username;
                newUser.Name = this.form.name;
                newUser.Surname = this.form.surname;
                newUser.Password = this.form.password;
                newUser.State = true;

                this._registerService.RegisterUser(newUser).subscribe(resultNewUser => {
                    if (resultNewUser) {
                        this.form.options.alert = "Kayıt başarılı bekleyiniz...";

                        setTimeout(() => {
                            this._router.navigate(["/home"]);
                        }, 1500);
                    }
                    else {
                        this.form.options.alert = "Kayıt başarısız !";
                    }
                });
            }
        });

    }
}