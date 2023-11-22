import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  async fetchData(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
  }
}
