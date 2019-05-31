import { Component } from "@angular/core";

@Component({
  selector: "myapp",
  templateUrl: "./app.component.html"
})

export class AppComponent {

  loadedFeature: string = 'recipe';
  constructor() {
    console.log("Hello angular console...");
  }// end function

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  
}// end class