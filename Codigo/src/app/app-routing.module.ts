import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: () => import("~/app/login/login.module").then((m) => m.loginModule) },
    { path: "registro", loadChildren: () => import("~/app/registro/registro.module").then((m) => m.registroModule) },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "browse", loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule) },
    { path: "search", loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule) },
    { path: "VerPerfiles", loadChildren: () => import("~/app/VerPerfiles/VerPerfiles.module").then((m) => m.VerPerfilesModule) },
    { path: "CrearPerfil", loadChildren: () => import("~/app/CrearPerfil/CrearPerfil.module").then((m) => m.CrearPerfilModule) },
    { path: "tareas", loadChildren: () => import("~/app/tareas/tareas.module").then((m) => m.tareasModule) },
    { path: "crear-tarea", loadChildren: () => import("~/app/crear-tareas/crear-tarea.module").then((m) => m.crearTareaModule)},
    { path: "task-done", loadChildren: () => import("~/app/task-done/task-done.module").then((m) => m.taskDoneModule) },
    { path: "task-done", loadChildren: () => import("~/app/task-done/task-done.module").then((m) => m.taskDoneModule) },
    { path: "tarea-detalle", loadChildren: () => import("~/app/tarea-detalle/tarea-detalle.module").then((m) => m.tareaDetalleModule)},
    { path: "tarea-modificar", loadChildren: () => import("~/app/tarea-modificar/tarea-modificar.module").then((m) => m.tareaModificarModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
