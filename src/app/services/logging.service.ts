import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  onConsole(data: any) {
    console.log(data);
  }
}
