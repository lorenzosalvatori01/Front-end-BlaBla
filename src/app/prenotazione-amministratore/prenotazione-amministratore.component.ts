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


@Component({
  selector: 'app-prenotazione-amministratore',
  templateUrl: './prenotazione-amministratore.component.html',
  styleUrl: './prenotazione-amministratore.component.css'
})
export class PrenotazioneAmministratoreComponent  implements OnInit{

  prenotazioni: any[] = [];  // Aggiungi questa riga per memorizzare gli utenti
  tutti: boolean = true;  // Aggiungi questa riga per memorizzare gli utenti
  lunedi : boolean = false;
  martedi : boolean = false;
  mercoledi : boolean = false;


  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private utenteService :UtenteService,
    private user :UserService,
    private bookingService : BookingService,
    
    ) {

    }


    ngOnInit(): void {
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
    
    }

    apriMar(){
      this.martedi = true;
      this.lunedi = false;
      this.mercoledi = false;
      this.tutti = false;
    }

    apriMer(){
      this.mercoledi = true;
      this.lunedi = false;
      this.martedi = false;
      this.tutti = false;
    }

    ciao(){
      this.mercoledi = true;
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
}
