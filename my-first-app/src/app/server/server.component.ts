import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:  [`
        .biancoTesto {
            color: aliceblue;
        }
    `]
})
export class ServerComponent {
    serverId: number = Math.random()*10000000;
    serverStatus: string = 'offline';
    serverColor: string = 'blue';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getServerColor() {
        return this.serverColor;
    }
}