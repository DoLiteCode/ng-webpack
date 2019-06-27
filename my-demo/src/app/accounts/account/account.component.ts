import { Component, Input } from "@angular/core";
import { AccountService } from "../../shared/services/account.service";

@Component({
  selector: 'mydemo-account',
  templateUrl: './account.component.html'
})
export class AccountComponent {
  @Input() account: {name: '', status: ''};
  @Input() id: number;

  constructor(private accService: AccountService) {
    //console.log("accpount component");
  }

  onSetTo(status: string) {
    this.accService.onStatusChanged({ id: this.id, newStatus: status });
    //console.log(`A service status changed, new status: ${status}`);
    this.accService.statusUpdated.emit(status);
  }

}