import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingRequest } from '../../models/booking-request';
import { AuthService } from '../../../service/auth.service';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-giovedi',
  templateUrl: './giovedi.component.html',
  styleUrl: './giovedi.component.css'
})
export class GiovediComponent {

  isMonday: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private bookingService : BookingService,


    ) {}

  ngOnInit(): void {
    this.isMonday = this.checkIfMonday();

      
  }

  
  // printCurrentDay(): void {
  //   const currentDate = new Date();
  //   const currentDay = currentDate.toLocaleDateString('it-IT', { weekday: 'long' });
  //   console.log('Oggi è:', currentDay);
  // }

  checkIfMonday(): boolean {
    const currentDate = new Date();
    return currentDate.getDay() === 1; // 0 è Domenica, 1 è Lunedì, ecc.
  }



  book(ora : string){
    const token = this.authService.getToken();
    if(token){
      const bookingData: BookingRequest = {
        fascia_oraria_prenotazione: ora,
        giorno_prenotazione: "GIOVEDI",
        indirizzo: "cus-camerino",
      };
    
      this.bookingService.bookBooking(token, bookingData).subscribe(
        response => {
          alert(response.message)
          console.log('Prenotazione effettuata con successo:', response);
        },
        error => {
          console.error('Errore durante la prenotazione:', error);
        }
      );
    }
  }


  

  
    logOut(){
      this.authService.logout();
    }

  //route
  lunedi() {
    this.router.navigate(['/lunedi']);
  }

  martedi() {
    this.router.navigate(['/martedi']);
  }

  mercoledi() {
    this.router.navigate(['/mercoledi']);
  }

  giovedi() {
    this.router.navigate(['/giovedi']);
  }

  venerdi() {
    this.router.navigate(['/venerdi']);
  }


  home() {
    this.router.navigate(['/home']);
  }
  
 

}
