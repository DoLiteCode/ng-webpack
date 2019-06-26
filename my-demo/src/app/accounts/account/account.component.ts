import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'mydemo-account',
  templateUrl: './account.component.html'
})
export class AccountComponent {
  @Input() account: {name: '', status: ''};
  @Input() id: number;

  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string}>();
  
  constructor() {
    console.log("accpount component");
  }

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    console.log(`A service status changed, new status: ${status}`);
  }

}