import { Component, OnInit } from '@angular/core';
import { AccountDataService } from 'src/app/services/account-data.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountData: AccountDataService) {}

  ngOnInit() {
    this.accounts = this.accountData.accounts;
  }
}
