import { Component } from "@angular/core";
import { AccountService } from "../../shared/services/account.service";

@Component({
  selector: 'mydemo-newaccount',
  templateUrl: './new-account.component.html'
})
export class NewAccountComponent {

  constructor(private accService: AccountService) {
    this.accService.statusUpdated.subscribe(
      (status: string) => {
        console.log(`Updated status: ${status}`)
      }
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accService.onAccountAdded({
      name: accountName,
      status: accountStatus
    })

    //console.log(`A new account is added.`);
  }
}