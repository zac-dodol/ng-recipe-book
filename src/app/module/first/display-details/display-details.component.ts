import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.scss'],
})
export class DisplayDetailsComponent {
  showSecret: boolean = false;
  log: any[] = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // show click count
    // this.log.push(this.log.length + 1);

    // show timestamp of click event
    this.log.push(new Date());
  }
}
