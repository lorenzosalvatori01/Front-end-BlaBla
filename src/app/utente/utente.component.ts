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

  private apiUrl = 'http://localhost:8080/api/user';

  nome :any ;
  utente :any ;
  role :any ;

  userType: Utente  | null = null;

  isEmployee: boolean | undefined;

 
  users: any[] = [];  // Aggiungi questa riga per memorizzare gli utenti

  
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

  }


  book() {
    const token = this.authService.getToken();
    if(token){
      const bookingData: BookingRequest = {
        fascia_oraria_prenotazione: "ORE_10",
        giorno_prenotazione: "VENERDI"
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
          this.role = users.role
          console.log(this.role)
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
    if(this.role == "USER"){
      return true
    }else{
      return false
    }
  }




  // getUsers(): Observable<any> {
  //   // Recupera il token dal servizio di autenticazione
  //   const token = this.authService.getToken();

  //   if (!token) {
  //     // Puoi gestire l'assenza di token in modo appropriato (reindirizzamento, logout, ecc.)
  //     console.error('Token assente');
      
  //     // Ritorna un observable che rappresenta un errore
  //     return throwError('Token assente');
  //   }

  //   // Aggiungi il token all'header della richiesta
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  //   // Esegui la chiamata HTTP con l'header aggiunto
  //   if (this.userType instanceof Utente) {
  //     return this.http.get<any[]>(`${this.apiUrl}/getUsers`, { headers })
  //       .pipe(
  //         catchError((error) => {
  //           console.error('Errore durante la chiamata getUsers:', error);
  //           return throwError(() => new Error('Errore durante la chiamata getUsers'));
  //         })
  //       );
  //   } else {
  //     // Gestisci il caso in cui this.userType non sia un'istanza di Utente
  //     // Qui puoi decidere di restituire un Observable vuoto, uno con dati fittizi, o un errore
  //     console.error('UserType non è un Utente');
  //     // Ad esempio, restituire un Observable vuoto:
  //     return of([]); // Restituisce un Observable che emette un array vuoto
  //     // O restituire un errore:
  //     // return throwError(() => new Error('UserType non è un Utente'));
  //   }
  // }

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

}
