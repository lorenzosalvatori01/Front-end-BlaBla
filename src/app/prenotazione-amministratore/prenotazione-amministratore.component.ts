import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Observable, catchError, throwError, of } from 'rxjs';
import { Utente } from '../models/utente';
import { Amministratore } from '../models/amministratore';
import { UtenteService } from '../../service/utente.service';
import { UserService } from '../../service/user.service';
import { BookingService } from '../../service/booking.service';
import { BookingRequest } from '../models/booking-request';
import { Router } from '@angular/router';



@Component({
  selector: 'app-prenotazione-amministratore',
  templateUrl: './prenotazione-amministratore.component.html',
  styleUrl: './prenotazione-amministratore.component.css'
})
export class PrenotazioneAmministratoreComponent  implements OnInit{

  prenotazioni: any[] = [];  // Aggiungi questa riga per memorizzare gli utenti
  prenotazioniLunedi: any[] = [];  // Aggiungi questa riga per memorizzare gli utenti
  tutti: boolean = true;  // Aggiungi questa riga per memorizzare gli utenti
  lunedi : boolean = false;
  martedi : boolean = false;
  mercoledi : boolean = false;
  giovedi : boolean = false;
  venerdi : boolean = false;


  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private utenteService :UtenteService,
    private user :UserService,
    private bookingService : BookingService,
    private router: Router,    
    ) {

    }


    ngOnInit(): void {
        this.recuperaDiLunedi();
        this.recuperaTutti();
    }


    
    apriTutti(){
      this.tutti = true;
      this.martedi = false;
      this.mercoledi = false;
      this.lunedi=false;
    
    }

    apriLun(){
      this.lunedi = true;
      this.martedi = false;
      this.mercoledi = false;
      this.tutti=false;
      this.giovedi = false;
      this.venerdi = false;
    
    }

    apriMar(){
      this.martedi = true;
      this.lunedi = false;
      this.mercoledi = false;
      this.tutti = false;
      this.giovedi = false;
      this.venerdi = false;
    }

    apriMer(){
      this.mercoledi = true;
      this.lunedi = false;
      this.martedi = false;
      this.tutti = false;
      this.giovedi = false;
      this.venerdi = false;
    }

    apriGiov(){
      this.giovedi = true
      this.mercoledi = false;
      this.lunedi = false;
      this.martedi = false;
      this.tutti = false;
      this.venerdi = false;
    }

    apriVen(){
      this.venerdi = true
      this.mercoledi = false;
      this.lunedi = false;
      this.martedi = false;
      this.giovedi = false;
      this.tutti = false;
    }

 

  recuperaTutti(){
    const token = this.authService.getToken();
    if(token) {
     this.bookingService.getBooking(token).subscribe(
       book => {
         this.prenotazioni = book;
         console.log(book)
       },
       error => {
         console.error('Errore durante il recupero degli utenti:', error);
       }
     );
   } else {
     console.error('Token assente');
   }
  }

  
  recuperaDiLunedi(){
    const token = this.authService.getToken();
    const bookData = { giorno_prenotazione: "LUNEDI" }; // Se `bookingData` deve essere un oggetto
    if(token) {
      this.bookingService.getLunedi(token, bookData).subscribe(
        book => {
          this.prenotazioniLunedi = book;
          console.log(book);
        },
        error => {
          console.error('Errore durante il recupero delle prenotazioni:', error);
        }
      );
    } else {
      console.error('Token assente');
    }
  }
  


  login() {
    this.router.navigate(['/loginUtente']);
  }

  home() {
    this.router.navigate(['/homeAmministratore']);
  }
}
