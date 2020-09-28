import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { crearTareaComponent } from "./crear-tarea.component";

const routes: Routes = [
    { path: "", component: crearTareaComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class crearTareasRoutingModule { }