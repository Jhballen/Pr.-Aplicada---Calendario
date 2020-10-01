import { NgModule, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { loginRoutingModule } from "./login-routing-module";
import { loginComponent } from "./login.component";



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

    constructor(){
    }

    ngOnInit(): void {
        
    }
};