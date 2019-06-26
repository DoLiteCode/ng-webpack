import { Component } from "@angular/core";

@Component({
  selector: 'mydemo-sampledirectives',
  templateUrl: './sample-directives.component.html'
})
export class SampleDirectivesComponent {
  
  onlyOdd: boolean = false;
  switchValue:number = 10;
  
  constructor() {}
}