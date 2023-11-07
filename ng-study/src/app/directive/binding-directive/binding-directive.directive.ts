import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBindingDirective]',
})
export class BindingDirectiveDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = 'red';
    this.textColor = 'white';
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'transparent';
    this.textColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'blue';
    this.textColor = 'white';
  }
}
