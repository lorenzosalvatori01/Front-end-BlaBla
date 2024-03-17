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

  
  prenota(){
    alert("hello")
  }

  lunedi() {
    this.router.navigate(['/lunedi']);
  }

  martedi() {
    this.router.navigate(['/martedi']);
  }

  book() {
    const token = this.authService.getToken();
    if(token){
      const bookingData: BookingRequest = {
        fascia_oraria_prenotazione: "ORE_15",
        giorno_prenotazione: "MERCOLEDI"
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
