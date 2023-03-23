import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColaboradorService } from './services/colaborador.service';
import { HeaderComponent } from './components/header/header.component';
import { IndexColaboradorComponent } from './components/colaborador/index/index.component';
import { CreateColaboradorComponent } from './components/colaborador/create/create.component';
import { EditColaboradorComponent } from './components/colaborador/edit/edit.component';
import {ButtonModule} from 'primeng/button';
import { IndexClienteComponent } from './components/cliente/index/index.component';
import { CreateClienteComponent } from './components/cliente/create/create.component';
import { EditClienteComponent } from './components/cliente/edit/edit.component';
import { ClienteService } from './services/cliente.service';
import { ToastService } from './services/toast.service';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from "primeng/toast";
import { DashboardClienteComponent } from './components/cliente/buyer/dashboard-cliente/dashboard-cliente.component';
import { ProspeccionClienteComponent } from './components/cliente/buyer/prospeccion-cliente/prospeccion-cliente.component';
import { AsideClienteComponent } from './components/cliente/buyer/aside-cliente/aside-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    IndexColaboradorComponent,
    CreateColaboradorComponent,
    EditColaboradorComponent,
    IndexClienteComponent,
    CreateClienteComponent,
    EditClienteComponent,
    DashboardClienteComponent,
    ProspeccionClienteComponent,
    AsideClienteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MessagesModule,
    ToastModule,
    BrowserAnimationsModule,

    routing,
    


    ButtonModule
  ],
  providers: [ColaboradorService, ClienteService, ToastService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
