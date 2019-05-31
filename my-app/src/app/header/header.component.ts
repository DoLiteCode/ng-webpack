import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'myapp-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>();
  feature: string = 'recipe';

  onSelect(feature: string) {
    this.feature = feature;
    this.featureSelected.emit(feature);
  }
}