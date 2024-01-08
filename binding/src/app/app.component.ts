import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //encapsulation: ViewEncapsulation.None // elimina encapsulation
})
export class AppComponent {

  title = 'CORSO ANGULAR';

  elementi = ['cane','gatto'];

  persone = [
    {nome: 'catello', cognome: 'cuccurullo', color: 'red'},
    {nome: 'crotino', cognome: 'caccavaci', color: 'blue'},
    {nome: 'Frengo', cognome: 'crodino', color: 'green'},
    {nome: 'fred', cognome: 'bongusto', color: 'violet'},
    {nome: 'ralph', cognome: 'rogerside', color: 'purple'}
  ];

  constructor() {
     console.log(typeof this.elementi);
  }
  message = "catello go!";

  receiveMessage($event) {
    this.message = $event;
  }
}
