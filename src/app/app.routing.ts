import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { IndexColaboradorComponent } from "./components/colaborador/index/index.component";
import { CreateColaboradorComponent } from "./components/colaborador/create/create.component";
import { EditColaboradorComponent } from "./components/colaborador/edit/edit.component";
import { CreateClienteComponent } from "./components/cliente/create/create.component";
import { EditClienteComponent } from "./components/cliente/edit/edit.component";
import { IndexClienteComponent } from "./components/cliente/index/index.component";
import { DashboardClienteComponent } from "./components/cliente/buyer/dashboard-cliente/dashboard-cliente.component";
import { ProspeccionClienteComponent } from "./components/cliente/buyer/prospeccion-cliente/prospeccion-cliente.component";

const appRoutes:Routes = [
    { path: 'dashboard', component: DashboardComponent , 
    },
    {path:'', component:LoginComponent},
    {path:'', component:DashboardComponent,
        children:[
            {path:'colaborador', component:IndexColaboradorComponent},
            {path:'colaborador/create', component:CreateColaboradorComponent},
            {path:'colaborador/:id', component:EditColaboradorComponent},
            {path:'cliente', component:IndexClienteComponent},
            {path:'cliente/create', component:CreateClienteComponent},
            {path:'cliente/:id', component:EditClienteComponent},
            {
                path:'cliente/:id/dashboard',component:DashboardClienteComponent
            },
            {
                path:'cliente/:id/prospeccion',component:ProspeccionClienteComponent
            },

        ]
    },


]
export const AppRoutingModule:any[] = [];
export const routing :ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);