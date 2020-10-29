import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { tareaDetalleRoutingModule } from "./tarea-detalle.routing.module";
import { tareaDetalleComponent } from "./tarea-detalle.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        tareaDetalleRoutingModule
    ],
    declarations: [
        tareaDetalleComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class tareaDetalleModule { }