import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { TaskService } from "../services/task_service/task.service";
import { Task } from "../models/task.model";
import { enviroment } from '~/environment/env';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";


@Component({
    selector: "tarea-modificar",
    templateUrl: "./tarea-modificar.component.html",
    styleUrls: ["./tarea-modificar.component.css"]

})
export class tareaModificarComponent implements OnInit {

    
    task:Task;
    estatus: string;
    constructor(private router: RouterExtensions,
        private taskService: TaskService) {
        // Use the component constructor to inject providers.
        this.task = enviroment.task;
        this.estatus = "";
    }

    changeEstatus () {

        

    }



    public ngOnInit(): void {
        if (this.task.status==0) {
            this.estatus = "Tarea Pendiente";
        } else if (this.task.status==1) {
            this.estatus = "Tarea Terminada";
        } else {
            this.estatus ="Tarea verificada y terminada";
        }
    }

    public onNavigate() {

        this.router.navigate(['./home']);

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    actualizarTask () {
        enviroment.task.description = this.task.description;
        enviroment.task.title = this.task.title;
        
        this.taskService.putTask(this.task).subscribe(task => console.log(task));
        this.onNavigate();
    }

    verificarTask() {
        enviroment.task.status = 1;
        this.taskService.putTask(enviroment.task).subscribe(task => console.log(task));
        this.onNavigate();
    }

    eliminarTask() {
        this.taskService.delete(this.task._id);
        this.onNavigate();
    }

}