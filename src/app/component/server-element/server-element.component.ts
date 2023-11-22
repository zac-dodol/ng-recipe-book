import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent {
  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
    footer: string;
  } = {
    type: '',
    name: '',
    content: '',
    footer: '',
  };

  // switch case for color base on the type
  getColorByElementType(type: string): string {
    switch (type) {
      case 'server':
        return 'red';
      case 'blueprint':
        return 'blue';
      case 'footer':
        return 'green';
      default:
        return '';
    }
  }
}
