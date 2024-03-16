import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';



import { RegistraComponent } from './registra/registra.component';
import { LoginComponent } from './login/login.component';
import { UtenteComponent } from './utente/utente.component';
import { HomeComponent } from './home/home.component';
import { LunediComponent } from './prenotazione/lunedi/lunedi.component';
import { MartediComponent } from './prenotazione/martedi/martedi.component';
import { MercolediComponent } from './prenotazione/mercoledi/mercoledi.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistraComponent,
    LoginComponent,
    UtenteComponent,
    HomeComponent,
    LunediComponent,
    MartediComponent,
    MercolediComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
