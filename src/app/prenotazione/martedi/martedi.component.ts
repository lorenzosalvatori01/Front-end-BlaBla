import { Component, input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-martedi',
  templateUrl: './martedi.component.html',
  styleUrl: './martedi.component.css'
})
export class MartediComponent {

  

  constructor(private router: Router) {}

  
  prenota(){
    alert("hello")
  }

  lunedi() {
    this.router.navigate(['/lunedi']);
  }

  martedi() {
    this.router.navigate(['/martedi']);
  }


}
