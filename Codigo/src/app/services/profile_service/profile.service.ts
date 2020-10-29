import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../../../environment/env";
import { User } from "../../models/user.model";
import { Task } from "../../models/task.model";
import { Observable } from "rxjs";
import { Profile } from "~/app/models/profile.model";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient){ }
        
    createProfile(profile: Profile){
        return this.http.post <Profile[]> (`${enviroment.urlApi}/profile`, profile)    
    }

    getProfile(userId: string ): Observable<Profile[]>{
        return this.http.get <Profile[]> (`${enviroment.urlApi}/profile/${userId}`)
    }

    putProfile(profile: Profile){
        return this.http.put(`${enviroment.urlApi}/profile/${profile._id}`, profile)
    }

}