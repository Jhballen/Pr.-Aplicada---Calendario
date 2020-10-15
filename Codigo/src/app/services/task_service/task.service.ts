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

    delete(id: String){
        return this.http.delete(`${enviroment.urlApi}/task/${id}`).subscribe(
            (res)=>{
                console.log("eliminado", id)
            }
        )
    }

    getAllTasks (): Observable <Task []> {​​
        return this.http.get<Task []>(`${​​enviroment.urlApi}​​/task`);
    }​​

    putTask(task: Task) {
        return this.http.put (`${enviroment.urlApi}/task/${task._id}`, task)
    }


}