import { Component } from "@angular/core";

@Component({
  selector: "myapp",
  template: `
  <h2>Hello angular</h2>
  <myapp-servers></myapp-servers>
  `
})

export class AppComponent {

  constructor() {
    console.log("Hello angular console...");
  }// end function
  
}// end class