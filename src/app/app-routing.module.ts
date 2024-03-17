import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraComponent } from './registra/registra.component';
import { UtenteComponent } from './utente/utente.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LunediComponent } from './prenotazione/lunedi/lunedi.component';
import { MartediComponent } from './prenotazione/martedi/martedi.component';
import { MercolediComponent } from './prenotazione/mercoledi/mercoledi.component';
import { LoginUtenteComponent } from './login1/login-utente/login-utente.component';
import { RegistrazioneUtenteComponent } from './registrazione/registrazione-utente/registrazione-utente.component';

const routes: Routes = [

  {  path: 'registra',  component: RegistraComponent },
  {  path: 'registraUtente',  component: RegistrazioneUtenteComponent },
  {  path: 'loginUtente',  component: LoginUtenteComponent },
  {  path: 'utente',  component: UtenteComponent, canActivate: [AuthGuard]  },
  {  path: 'lunedi',  component: LunediComponent, canActivate: [AuthGuard]  },
  {  path: 'martedi',  component: MartediComponent, canActivate: [AuthGuard]  },
  {  path: 'mercoledi',  component: MercolediComponent, canActivate: [AuthGuard]  },
  {  path: 'home',  component: HomeComponent, canActivate: [AuthGuard] },
  {  path: '',  component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
