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
    let elements = this.ref.nativeElement.querySelectorAll(".full-name, .about, .date-of-birth, .status");
    elements.forEach((elem: HTMLElement) => elem.style.color = "black");
  }
}

