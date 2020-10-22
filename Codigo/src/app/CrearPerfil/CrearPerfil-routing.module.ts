import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CrearPerfilComponent } from "./CrearPerfil.component";

const routes: Routes = [
    { path: "", component: CrearPerfilComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CrearPerfilRoutingModule { }
