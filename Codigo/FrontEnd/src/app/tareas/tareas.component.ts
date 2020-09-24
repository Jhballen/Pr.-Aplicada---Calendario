import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "tareas",
    templateUrl: "./tareas.component.html",
    styleUrls:["./tareas.component.css"]

})
export class tareasComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }
    

    public ngOnInit(): void {
       
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    
}
