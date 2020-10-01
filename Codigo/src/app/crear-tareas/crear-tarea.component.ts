import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import { TextField } from "tns-core-modules/ui/text-field";
import { setTimeout } from "tns-core-modules/timer";
import { Page } from "tns-core-modules/ui/page";


@Component({
    selector: 'crear-tarea',
    templateUrl: './crear-tarea.component.html',
    styleUrls: ['./crear-tarea.component.css']
    
})

export class crearTareaComponent implements OnInit{

    constructor(
        private router: RouterExtensions,
        private page: Page
    ){this.page.actionBarHidden = true;}

    ngOnInit(){}
}