import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(
        private router: RouterExtensions
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.onNavigate();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    public onNavigate() {
        this.router.navigate(['./tareas']);
    }
}
