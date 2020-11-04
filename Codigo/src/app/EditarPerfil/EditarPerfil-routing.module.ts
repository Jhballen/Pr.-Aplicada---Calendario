import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EditarPerfilComponent } from "./EditarPerfil.component";

const routes: Routes = [
    { path: "", component: EditarPerfilComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EditarPerfilRoutingModule { }
