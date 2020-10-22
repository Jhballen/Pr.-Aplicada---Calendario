import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { TextField } from "tns-core-modules/ui/text-field";
import { setTimeout } from "tns-core-modules/timer";
import { Page } from "tns-core-modules/ui/page";
import { UserService } from '../services/user_service/user.services';
import { User } from '../models/user.model';
import { enviroment } from '~/environment/env';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})

export class loginComponent implements OnInit {

    userName: String;
    tempPassword: String;

    constructor(
        private userService: UserService,
        private router: RouterExtensions,
        private page: Page
    ) { this.page.actionBarHidden = true; }


    ngOnInit() { }

    public onNavigate() {

        this.router.navigate(['./VerPerfiles']);

    }
    public onNavigate2() {
        this.router.navigate(['./registro']);

    }

    public login() {
        let user = this.userService.shearUser(this.userName, this.tempPassword).subscribe(
            (value: User) => {
                if (value.password == this.tempPassword) {
                    enviroment.user = value;
                    this.onNavigate();
                } else {
                    console.log("NO REGISTRADO**************")
                }
            }
        )

    }
}