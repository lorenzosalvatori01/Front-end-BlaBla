import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraComponent } from './registra/registra.component';

const routes: Routes = [

  {  path: 'registra',  component: RegistraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
