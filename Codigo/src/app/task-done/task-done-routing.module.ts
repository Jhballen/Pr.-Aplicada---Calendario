import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { taskDoneComponent } from "./task-done.component";


const routes: Routes = [
    { path: "", component: taskDoneComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class taskDoneRoutingModule { }
