import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-allowed',
  templateUrl: './not-allowed.component.html',
  styleUrls: ['./not-allowed.component.scss'],
})
export class NotAllowedComponent {
  constructor(private location: Location) {}

  onBack() {
    this.location.back();
  }
}
