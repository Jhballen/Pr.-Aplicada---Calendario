import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';
import { TaskService } from "../services/task_service/task.service";
import { Task } from "../models/task.model";
import { enviroment } from '~/environment/env';
import { User } from "../models/user.model";

@Component({
    selector: "tareas",
    templateUrl: "./tareas.component.html",
    styleUrls: ["./tareas.component.css"]

})
export class tareasComponent implements OnInit {

    spaceList: String;
    tasks: Array<Task>;
    task: Task;
    userTasks: Array<Task>;
    constructor(private router: RouterExtensions,
        private taskService: TaskService) {
        // Use the component constructor to inject providers.
        this.userTasks = new Array<Task>();
        this.spaceList = "";
    }


    public ngOnInit(): void {
       this.updateList();        
    }

    updateList(){
        this.taskService.getAllTasks().subscribe(task => {
            this.tasks = task;
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    crearTarea() {
        this.router.navigate(['crear-tarea']);
    }

    encontrarTask() {
        this.tasks.forEach(task => {

            if (enviroment.profile._id == task.profile[0] && task.status == 0) {
                this.userTasks.push(task)
                this.spaceList += " 50"; 
            }
        });
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
}




