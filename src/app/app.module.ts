import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';


import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';



import { RegistraComponent } from './registra/registra.component';
import { UtenteComponent } from './utente/utente.component';
import { HomeComponent } from './home/home.component';
import { LunediComponent } from './prenotazione/lunedi/lunedi.component';
import { MartediComponent } from './prenotazione/martedi/martedi.component';
import { MercolediComponent } from './prenotazione/mercoledi/mercoledi.component';
import { LoginUtenteComponent } from './login1/login-utente/login-utente.component';
import { LoginAmministratoreComponent } from './login1/login-amministratore/login-amministratore.component';
import { RegistrazioneUtenteComponent } from './registrazione/registrazione-utente/registrazione-utente.component';
import { RegistrazioneAmministratoreComponent } from './registrazione/registrazione-amministratore/registrazione-amministratore.component';
import { HomeAmministratoreComponent } from './home-amministratore/home-amministratore.component';
import { PrenotazioneAmministratoreComponent } from './prenotazione-amministratore/prenotazione-amministratore.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistraComponent,
    UtenteComponent,
    HomeComponent,
    LunediComponent,
    MartediComponent,
    MercolediComponent,
    LoginUtenteComponent,
    LoginAmministratoreComponent,
    RegistrazioneUtenteComponent,
    RegistrazioneAmministratoreComponent,
    HomeAmministratoreComponent,
    PrenotazioneAmministratoreComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
