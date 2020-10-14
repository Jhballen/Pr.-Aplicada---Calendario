import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { crearTareasRoutingModule } from "./crear-tarea-routing.module";
import { crearTareaComponent } from "./crear-tarea.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        crearTareasRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        crearTareaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class crearTareaModule { }