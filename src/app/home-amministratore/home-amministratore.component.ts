import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-home-amministratore',
  templateUrl: './home-amministratore.component.html',
  styleUrl: './home-amministratore.component.css'
})
export class HomeAmministratoreComponent {

  constructor(
    private router: Router,
    private authService : AuthService
    ) {}



  login() {
    this.router.navigate(['/loginUtente']);
  }
  
  home() {
    this.router.navigate(['/homeAmministratore']);
  }

  prenota() {
    this.router.navigate(['/prenotazioni']);
  }

}
