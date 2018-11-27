import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[hide]'
})
export class hideDirective{
// noinspection JSAnnotator
  constructor(private ref : ElementRef){

  }
  ngOnInit(){
    this.ref.nativeElement.addEventListener('mouseover', e => {
      this.ref.nativeElement.style.visibility = 'hidden';
    });
  }

}
