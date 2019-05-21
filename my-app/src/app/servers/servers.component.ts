import { Component, OnInit } from "@angular/core";

@Component({
  selector: "myapp-servers",
  //template: "<myapp-server></myapp-server> <myapp-server></myapp-server> <myapp-server></myapp-server>"
  templateUrl: './servers.component.html'
})

export class ServersComponent implements OnInit {
  
  activeStatus: boolean = false;
  
  servercreationStatus: string = "No Server was created!";
  serverName: string = "Test Server";
  serverCreated: boolean = false;

  servers:Array<string> = ['Test server 1', 'Test server 2']

  constructor() {
    
    setTimeout(() => {
      this.activeStatus = true;
    }, 2000);

  }

  onCreateServer() {
    this.servercreationStatus = "Server was created! Name is: " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}