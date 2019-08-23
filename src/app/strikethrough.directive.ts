import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="lightblue"
   }

}
