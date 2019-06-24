import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'mydemo-cockpit',
  templateUrl: './cockpit.component.html'
})

export class CockpitComponent implements OnInit {
  // newServerName: string;
  // newServerContent: string;

  @ViewChild('serverContentInput', {static: false}) serverContentInput: ElementRef; 

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  

  
  
  onAddServer(serverNameInput: HTMLInputElement) {

    this.serverCreated.emit({
      serverName: serverNameInput.value, //this.newServerName, 
      serverContent: this.serverContentInput.nativeElement.value //this.newServerContent
    });
    
    /* this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    }); */
    

  }

  onAddBlueprintServer(serverNameInput: HTMLInputElement) {

    this.blueprintCreated.emit({
      serverName: serverNameInput.value, //this.newServerName, 
      serverContent: this.serverContentInput.nativeElement.value //this.newServerContent
    });

    /* this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    }); */
  }

  ngOnInit() {

  }
}