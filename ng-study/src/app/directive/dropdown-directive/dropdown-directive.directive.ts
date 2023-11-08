import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open') isOpen = false;

  constructor() {}

  @HostListener('click') toggleOpen() {
    console.log('click');
    this.isOpen = !this.isOpen;
  }
}
