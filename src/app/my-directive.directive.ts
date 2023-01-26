import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private ref: ElementRef) { }

  @HostListener("mouseenter")
  bla(){
    console.log("test");
    this.ref.nativeElement.style.background = "green";
  }

}
