import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttdirective]',
  standalone: true
})
export class AttdirectiveDirective {
  private oldFontSize?:string;

  constructor(private el: ElementRef,) {
      this.oldFontSize = this.el.nativeElement.style.fontSize;
   }

  
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.fontSize = 'larger';
    this.el.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.fontSize = this.oldFontSize;
    this.el.nativeElement.style.color = 'initial';
  }


}
