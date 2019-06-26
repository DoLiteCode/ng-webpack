import { Component } from "@angular/core";

@Component({
  selector: 'mydemo-serverblueprint',
  templateUrl: './server-blueprint.component.html'
})
export class ServerBlueprintComponent {
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

  constructor() {}

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
}