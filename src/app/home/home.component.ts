import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Utente } from '../models/utente';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  utente!:Utente;
  autorizzato: boolean = true;

  
  constructor(
    private router: Router,
    private authService : AuthService,
    private user :UserService,
    ) {}


  ngOnInit(): void {
      this.recuperadati();
      this.isUser();
  }  



  //Recupero i dati dell'utente e li salvo nella variabile this.utente 
  recuperadati(){
    const token = this.authService.getToken();
    if(token) {
      this.user.getUser(token).subscribe(
        users => {
          this.utente = users;
        },
        error => {
          console.error('Errore durante il recupero degli utenti:', error);
        }
      );
    } else {
      console.error('Token assente');
  }
}


 //METODO PER AUTENTICARE 
 isUser(): boolean {
  if(this.utente?.role == "USER"){
    this.autorizzato = true;
    return true
  }else{
    this.autorizzato = false;
    return false
  }
}


 


  logOut(){
    this.authService.logout();
    this.router.navigate(['/loginUtente']);
  }

  //ROTTE
  prenota() {
    this.router.navigate(['/lunedi']);
  }

  login() {
    this.router.navigate(['/loginUtente']);
  }

  home() {
    this.router.navigate(['/home']);
  }

 

}
