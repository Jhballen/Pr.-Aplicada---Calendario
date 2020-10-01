const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const { url } = require('./config/database');
mongoose.connect(url, {
    useMongoClient: true
});

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

import { NgModule, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { loginRoutingModule } from "./login-routing-module";
import { loginComponent } from "./login.component";
import { userSchema } from "../../models/user";


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

    user= userSchema;

    constructor(){
        this.user = new userSchema;

    }

    ngOnInit(): void {
        
    }

    onNavigate(){
        console.log(this.user);
    }

};