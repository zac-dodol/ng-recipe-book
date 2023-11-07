import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBindingDirective]',
})
export class BindingDirectiveDirective implements OnInit {
  @Input() highlightColor: string = 'red';
  @Input('appBindingDirective') defaultColor: string = 'white';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string;
  // @HostBinding('style.color') textColor: string = 'red';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.highlightColor;
    this.textColor = this.defaultColor;
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
