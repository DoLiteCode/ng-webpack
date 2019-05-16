import { Component } from "@angular/core";

@Component({
  selector: "myapp",
  template: `
  <h2>Hello angular</h2>
  <myapp-server></myapp-server>
  `
})

export class AppComponent {

  constructor() {
    console.log("Hello angular console...");
  }// end function
  
}// end class