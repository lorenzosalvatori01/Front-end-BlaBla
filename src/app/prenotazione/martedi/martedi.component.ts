import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { BookingRequest } from '../../models/booking-request';
import { AuthService } from '../../../service/auth.service';
import { BookingService } from '../../../service/booking.service';


@Component({
  selector: 'app-martedi',
  templateUrl: './martedi.component.html',
  styleUrl: './martedi.component.css'
})
export class MartediComponent {

  

  constructor(
    
    private router: Router,
    private authService: AuthService,
    private bookingService : BookingService,) {

    
  }

  checkIfMondayOrTuesday(): boolean {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    return dayOfWeek === 1 || dayOfWeek === 2; // 1 è Lunedì, 2 è Martedì
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

  book() {
    const token = this.authService.getToken();
    if(token){
      const bookingData: BookingRequest = {
        fascia_oraria_prenotazione: "ORE_15",
        giorno_prenotazione: "MERCOLEDI",
        indirizzo: "MERCOLEDI",
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

}
