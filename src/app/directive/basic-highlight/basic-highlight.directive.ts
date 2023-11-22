import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    let bgColor = this.elementRef.nativeElement.style.backgroundColor;
    console.log(`original color is ${bgColor}`);
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    console.log(`now the color is ${bgColor}`);
  }
}
