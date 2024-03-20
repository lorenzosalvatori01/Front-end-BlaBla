import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingRequest } from '../../models/booking-request';
import { AuthService } from '../../../service/auth.service';
import { BookingService } from '../../../service/booking.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';


@Component({
  selector: 'app-lunedi',
  templateUrl: './lunedi.component.html',
  styleUrl: './lunedi.component.css'
})
export class LunediComponent implements OnInit{

  isMonday: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private bookingService : BookingService,
    public dialog: MatDialog


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


  openModal( content: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { title: "attenzione", content: content } // Passa i dati dinamici al modal
    });
  }


  book(ora : string,indirizzo : string){
    const token = this.authService.getToken();
    if(token){
      const bookingData: BookingRequest = {
        fascia_oraria_prenotazione: ora,
        giorno_prenotazione: "LUNEDI",
        indirizzo: indirizzo,
      };
    
      this.bookingService.bookBooking(token, bookingData).subscribe(
        response => {
          this.openModal(response.message);
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
  
 

}
