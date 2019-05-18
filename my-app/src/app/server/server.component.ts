import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'myapp-server',
  templateUrl: "./server.component.html"
  //template: "<h3>This is server component</h3>"
})

export class ServerComponent implements OnInit{

  servercreationStatus: string = "No Server was created!";
  serverName: string = "Test Server";

  activeStatus: boolean = false;

  constructor() {
    setTimeout(() => {
      this.activeStatus = true;
    }, 2000);
  }

  onCreateServer() {
    this.servercreationStatus = "Server was created! Name is: " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {

  }
}