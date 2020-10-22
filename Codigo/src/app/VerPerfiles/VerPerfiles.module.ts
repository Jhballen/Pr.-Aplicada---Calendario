import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { VerPerfilesRoutingModule } from "./VerPerfiles-routing.module";
import { VerPerfilesComponent } from "./VerPerfiles.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        VerPerfilesRoutingModule
    ],
    declarations: [
        VerPerfilesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class VerPerfilesModule { }
