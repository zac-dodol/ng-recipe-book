import { Component } from '@angular/core';
import { AccountDataService } from 'src/app/services/account-data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent {
  constructor(private accountData: AccountDataService) {
    this.accountData.statusUpdated.subscribe((status: string) =>
      alert(`New Status: ${status}`)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountData.addAccount(accountName, accountStatus);
  }
}
