import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  //selector : '.app-servers',
  templateUrl: './servers.component.html',
  //template: `<h1>zio fa su e giù</h1>`,
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  username = '';
  serverCreated = false;
  servers = ['Test Server 1', 'Test server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 4000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created, name is: ' + this.serverName + '.';
  }

  onUpdateServerName(event: any) {
    //console.log(event);
    this.serverName = event.target.value; // guarda il console.log
  }
}