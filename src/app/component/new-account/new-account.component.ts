import { Component } from '@angular/core';
import { AccountDataService } from 'src/app/services/account-data.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountData: AccountDataService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountData.addAccount(accountName, accountStatus);
  }
}
