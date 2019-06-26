import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'mydemo-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  
  @Output() navItemSelected = new EventEmitter<string>();

  navItem: string = 'manage-accounts';

  constructor() {
  }
  onSelect(navItem: string) {
    this.navItem = navItem;
    this.navItemSelected.emit(this.navItem);
  }

  
}