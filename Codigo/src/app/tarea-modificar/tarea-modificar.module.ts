import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { tareaModificarRoutingModule } from "./tarea-modificar.routing.module";
import { tareaModificarComponent } from "./tarea-modificar.component";
import { NativeScriptFormsModule } from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        tareaModificarRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        tareaModificarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class tareaModificarModule { }