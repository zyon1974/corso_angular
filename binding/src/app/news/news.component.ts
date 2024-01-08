import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  @Input() data: any;
  @Input() title: string;

  @Output() messageEvent = new EventEmitter<string>();
  message: string = "cia ne!";
  
  constructor() {}

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}
