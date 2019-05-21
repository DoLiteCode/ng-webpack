import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'myapp-server',
  templateUrl: "./server.component.html",
  //template: "<h3>This is server component</h3>"
  styles: [`
    .onlineStatus {
      color: white;
    }
    
  `]
})

export class ServerComponent implements OnInit{



  serverStatus: string = 'offline'; 

  constructor() {
    
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit() {

  }
}