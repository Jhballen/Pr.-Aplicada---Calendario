import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { tareaModificarComponent } from "./tarea-modificar.component";


const routes: Routes = [
    { path: "", component: tareaModificarComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class tareaModificarRoutingModule { }
