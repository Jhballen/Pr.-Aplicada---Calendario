import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page";
import { Task } from '../models/task.model';
import { TaskService } from "../services/task_service/task.service";

import { enviroment } from '~/environment/env';


@Component({
    selector: 'crear-tarea',
    templateUrl: './crear-tarea.component.html',
    styleUrls: ['./crear-tarea.component.css']
    
})

export class crearTareaComponent implements OnInit{

    newTarea: Task;
    fecha: any;

    constructor(
        private taskService: TaskService,
        private router: RouterExtensions,
        private page: Page
    ){this.page.actionBarHidden = true;
    this.newTarea= new Task()}

    ngOnInit(){}

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }


    createTask(){
        
        console.log("-->",this.newTarea.endDate);
        this.newTarea.status = 0;
        this.newTarea.profile = [enviroment.profile._id];
        this.taskService.createTask(this.newTarea);
        this.onNavigate();
    }

    public onNavigate() {
        this.router.navigate(['./home']);
    }
}