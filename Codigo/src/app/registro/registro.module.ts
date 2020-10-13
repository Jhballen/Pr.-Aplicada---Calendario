import { NgModule, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { from } from "rxjs";

import { registroRoutingModule } from "./registro-routing-module";
import { registroComponent } from "./registro.component";
import { UserService } from "../services/user_service/user.services";
import { User } from "../models/user.model";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        registroRoutingModule
    ],
    declarations: [
        registroComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class registroModule implements OnInit{ 
    newUser: User;
    
    constructor (private userService: UserService){
        this.newUser = new User();
    }
    createUser () {
        console.log("-->", this.newUser);
        this.userService.createUser(this.newUser);
    }

    ngOnInit(): void {

    }
}
