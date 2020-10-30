import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { tareaModificarRoutingModule } from "./tarea-modificar.routing.module";
import { tareaModificarComponent } from "./tarea-modificar.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        tareaModificarRoutingModule
    ],
    declarations: [
        tareaModificarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class tareaModificarModule { }