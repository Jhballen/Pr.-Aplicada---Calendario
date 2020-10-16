import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { taskDoneRoutingModule } from "./task-done-routing.module";
import { taskDoneComponent } from "./task-done.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        taskDoneRoutingModule
    ],
    declarations: [
        taskDoneComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class taskDoneModule { }
