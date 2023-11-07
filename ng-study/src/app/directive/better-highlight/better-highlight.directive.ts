import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.renderer);
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'transparent'
    );
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }
}
