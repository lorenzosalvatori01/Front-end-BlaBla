import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})
export class LoginComponent {

  prova: FormGroup;
  private tokenKey = 'authToken';
  loginMessage: string | null;
  giornoCorrente: number;



  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService, private router: Router, private route: ActivatedRoute,) {
    const dataCorrente = new Date();
    this.giornoCorrente = dataCorrente.getDay();
    this.loginMessage = this.route.snapshot.queryParams['message'] || null;

    this.prova = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      
    });
    
  }

  
  onSubmit() {
    if (this.prova.valid) {
      const userData = this.prova.value;
      this.http.post('http://localhost:8080/api/user/login', userData).subscribe(
        (response: any) => {
          // Gestisci la risposta di successo
          console.log('Risposta del server:', response);

          // Salva il token nella memoria locale di Chrome
          this.authService.setToken(response.token);

          alert('Login avvenuto con successo!');
          this.router.navigate(['utente']);

          // Opzionale: reindirizza l'utente a una rotta protetta
        },
        (error) => {
          // Gestisci l'errore
          console.error('Errore durante la chiamata:', error);
        }
      );
    } else {
      // Il form non è valido, gestisci l'errore di convalida
      console.error('Il form non è valido');
    }
  }


}
