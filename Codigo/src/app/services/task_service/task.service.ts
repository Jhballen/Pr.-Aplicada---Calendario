import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../../../environment/env";
import { User } from "../../models/user.model";
import { Task } from "../../models/task.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient){ }

    createTask(task: Task){
        return this.http.post(`${enviroment.urlApi}/task`, task).subscribe(
            (response)=>{
                console.log(response)
            },
            (error)=>{
                console.log(error);
            }
        );
    }

    getAllTasks (): Observable <Task []> {​​

        return this.http.get<Task []>(`${​​enviroment.urlApi}​​/task`);
    }​​


}