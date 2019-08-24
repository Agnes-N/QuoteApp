import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor( private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor="lightblue"
   }

}
