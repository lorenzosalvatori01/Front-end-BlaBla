import { Injectable } from '@angular/core';
import { Utente } from '../app/models/utente';
import { Amministratore } from '../app/models/amministratore';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private utente : Utente | Amministratore | undefined; 

   
  constructor(){}

 
  setUser(utente: Utente | Amministratore){
      this.utente = utente; 
  }

  getUser(){
      return this.utente;
  }
}