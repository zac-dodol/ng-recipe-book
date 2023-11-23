import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountDataService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor() {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
