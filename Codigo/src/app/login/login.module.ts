import { NgModule, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { loginRoutingModule } from "./login-routing-module";
import { loginComponent } from "./login.component";

import { User } from "../models/user.model";
import { UserService } from "../services/user_service/user.services";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        loginRoutingModule
    ],
    declarations: [
        loginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class loginModule implements OnInit{ 


    constructor(private userServices: UserService){
    }

    ngOnInit(): void {
        
    }
};