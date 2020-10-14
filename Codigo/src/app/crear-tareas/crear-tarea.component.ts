import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import { TextField } from "tns-core-modules/ui/text-field";
import { setTimeout } from "tns-core-modules/timer";
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

    constructor(
        private taskService: TaskService,
        private router: RouterExtensions,
        private page: Page
    ){this.page.actionBarHidden = true;
    this.newTarea= new Task()}

    ngOnInit(){}

    createTask(){
        this.newTarea.status = 0;
        this.newTarea.users = enviroment.user;
        console.log(this.newTarea)
        this.taskService.createTask(this.newTarea);
    }
}