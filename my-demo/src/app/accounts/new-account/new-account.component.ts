import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'mydemo-newaccount',
  templateUrl: './new-account.component.html'
})
export class NewAccountComponent {

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor() {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    console.log(`A new account is added.`);
  }
}