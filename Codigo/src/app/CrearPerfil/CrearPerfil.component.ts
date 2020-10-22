import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Profile } from "../models/profile.model";
import { ProfileService } from "../services/profile_service/profile.service";

@Component({
    selector: "CrearPerfil",
    templateUrl: "./CrearPerfil.component.html",
    styleUrls: ['./CrearPerfil.component.css']
})
export class CrearPerfilComponent implements OnInit {

    perfil: Profile;

    constructor(private profileService: ProfileService) {
        this.perfil = new Profile();
    }


    createProfile(){
        
        console.log(this.perfil)
        this.perfil.profilePicture = 0;
        if(this.perfil.name != null){
            this.profileService.createProfile(this.perfil).subscribe(
                (res)=>{
                    console.log(res);
                }
            )
        }

    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
