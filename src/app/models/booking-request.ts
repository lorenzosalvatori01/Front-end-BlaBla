export class BookingRequest {
    fascia_oraria_prenotazione: string;
    giorno_prenotazione: string;


    constructor(fascia_oraria_prenotazione: string, giorno_prenotazione: string) {
        this.fascia_oraria_prenotazione = fascia_oraria_prenotazione;
        this.giorno_prenotazione = giorno_prenotazione;
      }
}
