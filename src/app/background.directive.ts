import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private ref: ElementRef) { }

  @HostListener("click")
  changeColor(){
    this.ref.nativeElement.style.background = "yellow";
    let elements = this.ref.nativeElement.querySelectorAll(".switch-black");
    elements.forEach((elem: HTMLElement) => elem.style.color = "black");
  }
}

