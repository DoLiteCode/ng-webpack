import { Component } from "@angular/core";

@Component({
  selector: "mydemo",
  templateUrl: "./app.component.html"
})

export class AppComponent {
  
  navSelected:string = 'manage-accounts';

  constructor() {
    console.log("Hello angular console...");
  }// end function

  onNavigate(navSelected: string) {
    this.navSelected = navSelected;
  }
  
}// end class