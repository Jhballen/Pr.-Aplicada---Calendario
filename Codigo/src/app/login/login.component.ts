import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import { TextField } from "tns-core-modules/ui/text-field";
import { setTimeout } from "tns-core-modules/timer";
import { Page } from "tns-core-modules/ui/page";


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
    
})

export class loginComponent implements OnInit{

    constructor(
        private router: RouterExtensions,
        private page: Page
    ){this.page.actionBarHidden = true;}

    
    ngOnInit(){}

    public onNavigate(){

        this.router.navigate(['./home']);
        
    }
    public onNavigate2(){
        this.router.navigate(['./registro']);
        
    }
}