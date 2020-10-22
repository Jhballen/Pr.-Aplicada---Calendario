import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "VerPerfiles",
    templateUrl: "./VerPerfiles.component.html",
    styleUrls: ['./VerPerfiles.css']
})
export class VerPerfilesComponent implements OnInit {

    constructor(private _page: Page,private router: RouterExtensions) {
        this._page.actionBarHidden = true;
    }

    ngOnInit(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.gesturesEnabled=false;
    }

    onDrawerButtonTap(): void {
    
    }

    ingreso(){
        this.router.navigate(['task-done']);
    }
    addPerfil(){
        this.router.navigate(['CrearPerfil']);
        console.log('si sirve');
    }
}
