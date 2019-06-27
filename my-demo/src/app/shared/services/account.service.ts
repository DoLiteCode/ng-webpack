import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()

export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private logginService: LoggingService) {}
  
  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
    this.logginService.consoleNewOP(newAccount.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.logginService.consoleUpdateOP(updateInfo.newStatus);
  }
}