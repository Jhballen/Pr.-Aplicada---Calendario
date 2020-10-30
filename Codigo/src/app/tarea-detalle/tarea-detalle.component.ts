import { Component, Input, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';
import { TaskService } from "../services/task_service/task.service";
import { Task } from "../models/task.model";
import { enviroment } from '~/environment/env';
import { User } from "../models/user.model";

@Component({
    selector: "tarea-detalle",
    templateUrl: "./tarea-detalle.component.html",
    styleUrls: ["./tarea-detalle.component.css"]

})
export class tareaDetalleComponent implements OnInit {

    
    task:Task;
    
    constructor(private router: RouterExtensions,
        private taskService: TaskService) {
        // Use the component constructor to inject providers.
        this.task = new Task();
    
    }


    public ngOnInit(): void {
        this.task = enviroment.task;
    }

   

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    

    

    changeStatus(task: Task){
        if(task.status == 0){
            task.status = 1;
        }else {
            task.status = 0;
        }
        this.taskService.putTask(task).subscribe(
            (response)=>{
            }
        );
        this.onNavigate();
    }

    deleteTask(task: Task){
        this.taskService.delete(task._id);
        this.onNavigate();
    }

    public onNavigate() {

        this.router.navigate(['./home']);

    }

    modificarTask() {
        this.router.navigate(['tarea-modificar']);
    }

}