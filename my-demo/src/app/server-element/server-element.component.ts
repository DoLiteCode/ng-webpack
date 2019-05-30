import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'mydemo-server-element',
  templateUrl: './server-element.component.html'
})

export class ServerElementComponent implements OnInit {

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

  ngOnInit() {
    
  }

}