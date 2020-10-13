import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../../../environment/env";
import { User } from "../../models/user.model";
import { Task } from "../../models/task.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient){ }

    getAllUser (): Observable<User[]>{
        return this.http.get <User[]> (`${enviroment.urlApi}/user`);
    }

    createUser(user: User){
        return this.http.post(`${enviroment.urlApi}/user`, user).subscribe(
            (response)=>{
                console.log(response)
            },
            (error)=>{
                console.log(error);
            }
        );
    }
}