import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingRequest } from '../../models/booking-request';
import { AuthService } from '../../../service/auth.service';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-venerdi',
  templateUrl: './venerdi.component.html',
  styleUrl: './venerdi.component.css'
})
export class VenerdiComponent {

  
  constructor(
    
    private router: Router,
    private authService: AuthService,
    private bookingService : BookingService,) {

    
  }
  
  prenota(){
    alert("hello")
  }

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

    logOut(){
      this.authService.logout();
    }


  book() {
    const token = this.authService.getToken();
    if(token){
      const bookingData: BookingRequest = {
        fascia_oraria_prenotazione: "ORE_15",
        giorno_prenotazione: "MERCOLEDI",
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

    checkIfMondayTuesdayOrWednesday(): boolean {
      const currentDate = new Date();
      const dayOfWeek = currentDate.getDay();
      return dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3; // 1 è Lunedì, 2 è Martedì, 3 è Mercoledì
    }

}
