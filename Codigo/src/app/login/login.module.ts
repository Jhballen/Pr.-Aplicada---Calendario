import { NgModule, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { loginRoutingModule } from "./login-routing-module";
import { loginComponent } from "./login.component";

import { UserService } from "../services/user_service/user.services";
import { NativeScriptFormsModule } from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        loginRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        loginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class loginModule implements OnInit{ 


    constructor(){
    }

    ngOnInit(): void {
        
    }
};