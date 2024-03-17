import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione-utente',
  templateUrl: './registrazione-utente.component.html',
  styleUrl: './registrazione-utente.component.css'
})
export class RegistrazioneUtenteComponent {

  reg: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.reg = this.fb.group({
      nome: ['', [Validators.required,]],
      numero: ['', [Validators.required,]],
      cognome: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      
    });
  }

  
  registra() {
    if (this.reg.valid) {
      const userData = this.reg.value;
      this.http.post('http://localhost:8080/api/user/createUser', userData)
        .subscribe(
          (response) => {
            // Gestisci la risposta di successo
            console.log('Risposta del server:', response);
            alert("Registrazione avvenuta con successo!")
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
