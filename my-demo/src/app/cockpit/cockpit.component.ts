import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'mydemo-cockpit',
  templateUrl: './cockpit.component.html'
})

export class CockpitComponent implements OnInit {
  newServerName: string;
  newServerContent: string;

  element: { type: string, name: string, content: string };
  
  onAddServer() {
    /*
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });*/

  }

  onAddBlueprintServer() {
    /*this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });*/
  }

  ngOnInit() {

  }
}