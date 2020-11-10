import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { enviroment } from "~/environment/env";
import { Profile } from "../models/profile.model";
import { ProfileService } from "../services/profile_service/profile.service";

@Component({
    selector: "EditarPerfil",
    templateUrl: "./EditarPerfil.component.html",
    styleUrls: ['./EditarPerfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

    perfil: Profile;

    constructor(private profileService: ProfileService,private router: RouterExtensions) {
        this.perfil = new Profile();

    }



    confirmarEdicion(profile: Profile){
        this.profileService.putProfile(profile).subscribe(
            (res)=>{
                this.router.navigate(['VerPerfiles']);
            }
        );

    }

    ngOnInit(): void {
        this.perfil = enviroment.profile;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}