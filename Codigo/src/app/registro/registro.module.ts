import { NgModule, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { registroRoutingModule } from "./registro-routing-module";
import { registroComponent } from "./registro.component";



@NgModule({
    imports: [
        NativeScriptCommonModule,
        registroRoutingModule
    ],
    declarations: [
        registroComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class registroModule{ }
