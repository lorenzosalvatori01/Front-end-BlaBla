import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Observable, catchError, throwError, of } from 'rxjs';
import { Utente } from '../models/utente';
import { Amministratore } from '../models/amministratore';
import { UtenteService } from '../../service/utente.service';


@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.css'
})
export class UtenteComponent implements OnInit{

  private apiUrl = 'http://localhost:8080/api/user';

  userType: Utente | Amministratore | undefined;

  isEmployee: boolean | undefined;

 
  users: any[] = [];  // Aggiungi questa riga per memorizzare gli utenti

  
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private utenteService :UtenteService
    ) {

    }



  ngOnInit() {

    this.userType = this.utenteService.getUser();
    if (this.userType instanceof Amministratore) {
      this.isEmployee = true;
      
    } else if (this.userType instanceof Utente) {
      this.isEmployee = false;
     
    }

    this.getUsers().subscribe(
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


  getUsers(): Observable<any> {
    // Recupera il token dal servizio di autenticazione
    const token = this.authService.getToken();

    if (!token) {
      // Puoi gestire l'assenza di token in modo appropriato (reindirizzamento, logout, ecc.)
      console.error('Token assente');
      
      // Ritorna un observable che rappresenta un errore
      return throwError('Token assente');
    }

    // Aggiungi il token all'header della richiesta
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Esegui la chiamata HTTP con l'header aggiunto
    if (this.userType instanceof Utente) {
      return this.http.get<any[]>(`${this.apiUrl}/getUsers`, { headers })
        .pipe(
          catchError((error) => {
            console.error('Errore durante la chiamata getUsers:', error);
            return throwError(() => new Error('Errore durante la chiamata getUsers'));
          })
        );
    } else {
      // Gestisci il caso in cui this.userType non sia un'istanza di Utente
      // Qui puoi decidere di restituire un Observable vuoto, uno con dati fittizi, o un errore
      console.error('UserType non è un Utente');
      // Ad esempio, restituire un Observable vuoto:
      return of([]); // Restituisce un Observable che emette un array vuoto
      // O restituire un errore:
      // return throwError(() => new Error('UserType non è un Utente'));
    }
  }

  reloadUsers() {
    this.getUsers().subscribe(
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
