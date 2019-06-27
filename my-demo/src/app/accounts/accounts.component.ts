import { Component, OnInit } from "@angular/core";
import { AccountService } from "../shared/services/account.service";

@Component({
  selector: 'mydemo-accounts',
  templateUrl: './accounts.component.html',
  providers: [AccountService]
})
export class AccountsComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];
  
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

}