import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private ref: ElementRef) { }

  @HostListener("mouseenter")
  changeColor(){
    console.log("test");
    this.ref.nativeElement.style.background = "yellow";
    this.ref.nativeElement.style.color = "black";
  }

}
