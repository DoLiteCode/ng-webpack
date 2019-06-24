import { Component } from "@angular/core";

@Component({
  selector: "mydemo",
  templateUrl: "./app.component.html"
})

export class AppComponent {

  onlyOdd: boolean = false;
  switchValue:number = 10;

  serverElements:any[] = [
    {
      type: 'server',
      name: 'Test Server 01',
      content: 'Some test content'
    },
    {
      type: 'serverblueprint',
      name: 'Test Server 02',
      content: 'Some another test content'
    } 
  ];

  constructor() {
    console.log("Hello angular console...");
  }// end function


  onServerAdded(serverData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  
}// end class