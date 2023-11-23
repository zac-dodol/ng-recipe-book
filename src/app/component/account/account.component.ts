import { Component, Input } from '@angular/core';
import { AccountDataService } from 'src/app/services/account-data.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private accountData: AccountDataService) {}

  onSetTo(status: string) {
    this.accountData.onStatusChanged(this.id, status);
    // to submit event from service
    this.accountData.statusUpdated.emit(status);
  }
}
