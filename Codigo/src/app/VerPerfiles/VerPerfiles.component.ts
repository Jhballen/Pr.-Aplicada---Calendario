import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable } from "rxjs";
import * as app from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page";
import { enviroment } from "~/environment/env";
import { Profile } from "../models/profile.model";
import { ProfileService } from "../services/profile_service/profile.service";

@Component({
    selector: "VerPerfiles",
    templateUrl: "./VerPerfiles.component.html",
    styleUrls: ['./VerPerfiles.css']
})
export class VerPerfilesComponent implements OnInit {

    perfiles: Array<Profile>;
    spaceList: String

    constructor(
        private _page: Page,
        private router: RouterExtensions,
        private profileService: ProfileService) {
        this._page.actionBarHidden = true;
        this.spaceList = "";
        this.perfiles = new Array<Profile>();
    }

    ngOnInit(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.gesturesEnabled=false;
        this.loadDataBase();
    }

    async loadDataBase(){
        this.profileService.getProfile(enviroment.user._id).subscribe(
            (res)=>{
                this.perfiles = res;
                enviroment.profile = res[0];
            }
        )
        
    }


    onDrawerButtonTap(): void {
    
    }

    ingreso(profile: Profile){
        console.log(enviroment.profile)
        this.router.navigate(['home']);
    }
    addPerfil(){
        this.router.navigate(['CrearPerfil']);
        console.log('si sirve');
    }
}
