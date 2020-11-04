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
    spaceList: String;

    constructor(
        private _page: Page,
        private router: RouterExtensions,
        private profileService: ProfileService) {
        this._page.actionBarHidden = true;
        this.spaceList = "100";
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
            }
        )
        await this.delay(1300);
        this.createSpaceList();
    }

    createSpaceList(){
        this.spaceList=""
        for(let i=0;i<this.perfiles.length ;i++){
            this.spaceList += " 100"; 
        }
    }

    private delay(ms: number)
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    onDrawerButtonTap(): void {
    
    }

    ingreso(profile: Profile){
        enviroment.profile = profile;
        this.router.navigate(['home']);
    }
    addPerfil(){
        this.router.navigate(['CrearPerfil']);
        
    }
    editarP(profile: Profile){
        enviroment.profile = profile;
        this.router.navigate(['EditarPerfil']);
        console.log(profile.name);
    }
    eliminarP(profile: Profile){
        
        //AQUI VA EL METODO PARA PODER ELIMINAR EL PERFIL CREADO

    }
}
