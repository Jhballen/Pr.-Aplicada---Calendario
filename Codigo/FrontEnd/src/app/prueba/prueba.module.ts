import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { pruebaRoutingModule } from "./prueba-routing.module";
import { pruebaComponent } from "./prueba.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        pruebaRoutingModule
    ],
    declarations: [
        pruebaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class pruebaModule { }
