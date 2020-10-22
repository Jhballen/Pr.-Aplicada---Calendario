import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CrearPerfilRoutingModule } from "./CrearPerfil-routing.module";
import { CrearPerfilComponent } from "./CrearPerfil.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CrearPerfilRoutingModule
    ],
    declarations: [
        CrearPerfilComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CrearPerfilModule { }
