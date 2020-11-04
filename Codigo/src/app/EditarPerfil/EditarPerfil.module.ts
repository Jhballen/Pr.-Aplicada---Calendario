import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular";

import { EditarPerfilRoutingModule } from "./EditarPerfil-routing.module";
import { EditarPerfilComponent } from "./EditarPerfil.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EditarPerfilRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        EditarPerfilComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EditarPerfilModule { }
