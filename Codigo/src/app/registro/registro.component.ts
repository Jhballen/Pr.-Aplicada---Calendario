import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import { TextField } from "tns-core-modules/ui/text-field";
import { setTimeout } from "tns-core-modules/timer";
import { Page } from "tns-core-modules/ui/page";


import { UserService } from "../services/user_service/user.services";
import { User } from "../models/user.model";
import { Task } from '../models/task.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
    
})

export class registroComponent implements OnInit{

    newUser: User;

    constructor(
        private userService: UserService,
        private router: RouterExtensions,
        private page: Page
    ){
        this.page.actionBarHidden = true;
        this.newUser = new User();
    }

    
    ngOnInit(){}

    public onNavigate(){
        this.router.back();
        
    }

    public onBack(){
        this.router.back();
    }

    createUser(){
        //DATOS DE INICIO PREDETERMINADOS
        this.newUser.profilePicture = 0;
        this.newUser.type  = "usuario";

        console.log(this.newUser);
        //DATOS CONSULTADOS
        this.userService.createUser(this.newUser);
        this.onNavigate();
    }

}
