import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Observable, catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.css'
})
export class UtenteComponent implements OnInit{

  private apiUrl = 'http://localhost:8080/api/user';
  users: any[] = [];  // Aggiungi questa riga per memorizzare gli utenti

  
  constructor(private http: HttpClient, private authService: AuthService) {}


  ngOnInit() {
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
    return this.http.get<any[]>(`${this.apiUrl}/getUsers`, { headers })
      .pipe(
        catchError((error) => {
          // Gestisci l'errore qui, se necessario
          console.error('Errore durante la chiamata getUsers:', error);
          // Ritorna un observable che rappresenta un errore
          return throwError('Errore durante la chiamata getUsers');
        })
      );
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
