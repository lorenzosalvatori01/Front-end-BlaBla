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
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.css'
})
export class UtenteComponent implements OnInit{


  utente!:Utente;
 
  users: Utente[] = [];  // Aggiungi questa riga per memorizzare gli utenti

  
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private utenteService :UtenteService,
    private user :UserService,
    private bookingService : BookingService,
    
    ) {

    }



  ngOnInit() {
    this.recuperaTutti();
    this.recuperadati();
    this.book();
    this.printCurrentDay();

  }


  book() {
    const token = this.authService.getToken();
    if(token){
      const bookingData: BookingRequest = {
        fascia_oraria_prenotazione: "ORE_11",
        giorno_prenotazione: "MERCOLEDI",
        indirizzo: "MERCOLEDI",
      };
    
      this.bookingService.bookBooking(token, bookingData).subscribe(
        response => {
          console.log('Prenotazione effettuata con successo:', response);
        },
        error => {
          console.error('Errore durante la prenotazione:', error);
        }
      );
    }
    }



  recuperaTutti(){
    const token = this.authService.getToken();
    if(token) {
     this.user.getUsers(token).subscribe(
       users => {
         this.users = users;
       },
       error => {
         console.error('Errore durante il recupero degli utenti:', error);
       }
     );
   } else {
     console.error('Token assente');
   }
  }

  recuperadati(){
    const token = this.authService.getToken();
    if(token) {
      this.user.getUser(token).subscribe(
        users => {
          this.utente = users;
        },
        error => {
          console.error('Errore durante il recupero degli utenti:', error);
        }
      );
    } else {
      console.error('Token assente');
  }
    
  }



  //METODO PER AUTENTICARE 
  isUser(): boolean {
    if(this.utente?.role == "USER"){
      return true
    }else{
      return false
    }
  }



  reloadUsers() {
    const token = this.authService.getToken();
    if(token){
    this.user.getUsers(token).subscribe(
      (users) => {
        // Assegna gli utenti alla proprietà users del componente
        this.users = users;
      },
      (error) => {
        // Gestisci l'errore, ad esempio mostrando un messaggio all'utente
        console.error('Errore durante il recupero degli utenti:', error);
      }
    );
  }
}

printCurrentDay(): void {
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString('it-IT', { weekday: 'long' });
  console.log('Oggi è:', currentDay);
}


}
