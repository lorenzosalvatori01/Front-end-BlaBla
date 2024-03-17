import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private router: Router,
    private authService : AuthService
    ) {}



  logOut(){
    this.authService.logout();
  }

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
