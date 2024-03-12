import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraComponent } from './registra/registra.component';
import { LoginComponent } from './login/login.component';
import { UtenteComponent } from './utente/utente.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {  path: 'registra',  component: RegistraComponent },
  {  path: 'login',  component: LoginComponent },
  {  path: 'utente',  component: UtenteComponent, canActivate: [AuthGuard]  },
  {  path: 'home',  component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
