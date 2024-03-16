import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingRequest } from '../../models/booking-request';
import { AuthService } from '../../../service/auth.service';
import { BookingService } from '../../../service/booking.service';


@Component({
  selector: 'app-lunedi',
  templateUrl: './lunedi.component.html',
  styleUrl: './lunedi.component.css'
})
export class LunediComponent implements OnInit{
  constructor(
    private router: Router,
    private authService: AuthService,
    private bookingService : BookingService,


    ) {}

  ngOnInit(): void {
      
  }
  
  prenota(){
    alert("hello")
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
          alert("Prenotazione effettuata con succs")
          console.log('Prenotazione effettuata con successo:', response);
        },
        error => {
          console.error('Errore durante la prenotazione:', error);
        }
      );
    }
    }


  //route
  lunedi() {
    this.router.navigate(['/lunedi']);
  }

  martedi() {
    this.router.navigate(['/martedi']);
  }

 

}
