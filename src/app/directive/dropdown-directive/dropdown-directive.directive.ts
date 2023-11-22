import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleDocumentClick(
    event: Event
  ) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }

  constructor(private elRef: ElementRef) {}

  @HostListener('click') toggleClickOpen() {
    console.log('click');
    this.isOpen = !this.isOpen;
  }
}
