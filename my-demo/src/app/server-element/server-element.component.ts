import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'mydemo-server-element',
  templateUrl: './server-element.component.html'
})

export class ServerElementComponent implements OnInit {

  @Input('serverElement') element: { type: string, name: string, content: string };

  ngOnInit() {
    
  }

}