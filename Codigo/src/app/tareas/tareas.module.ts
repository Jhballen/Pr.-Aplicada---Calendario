import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { tareasRoutingModule } from "./tareas-routing.module";
import { tareasComponent } from "./tareas.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        tareasRoutingModule
    ],
    declarations: [
        tareasComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class tareasModule { }
