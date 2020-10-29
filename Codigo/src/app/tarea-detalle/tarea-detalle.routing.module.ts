import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { tareaDetalleComponent } from "./tarea-detalle.component";


const routes: Routes = [
    { path: "", component: tareaDetalleComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class tareaDetalleRoutingModule { }
