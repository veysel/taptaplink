import { Component, OnInit } from '@angular/core';

import { HomeService } from './Services/home.service';
import { StorageService } from '../Storage/Services/storage.service';

import { PostModel } from '../Common/Models/post.model';

@Component({
    selector: 'home',
    templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit {

    public form = {
        options: {
            alert: ""
        },
        post: "",
        postList: []
    };

    constructor(
        private _homeService: HomeService,
        private _storageService: StorageService
    ) {
        this.form.postList = new Array<PostModel>();
    }

    ngOnInit() {
        this.GetPostList();
    }

    public GetPostList(): void {
        if (this._storageService.GetStorage()) {

            let tempStorage = this._storageService.GetStorage();

            this._homeService.GetPostList(tempStorage.UserId, tempStorage.UserKey).subscribe(result => {

                if (!result || result.length < 1) {
                    return;
                }
                else {
                    this.form.postList = new Array<PostModel>();
                    this.form.postList = result;
                }

            });

        }
    }

    public PostButtonClick() {

        this.form.options.alert = "";

        if (!this.form.post) {
            this.form.options.alert = "Lütfen boş bırakmayınız !";
            return;
        }

        let tempStorage = this._storageService.GetStorage();
        this._homeService.InsertNewPost(tempStorage.UserId, tempStorage.UserKey, this.form.post).subscribe(result => {
            this.GetPostList();
        });

    }

}