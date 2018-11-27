import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[showonetrigger]'
})
export class showonetrigger{
// noinspection JSAnnotator
  constructor(private ref : ElementRef){

  }
  ngOnInit(){
    this.ref.nativeElement.addEventListener('mouseover', e => {
      this.ref.nativeElement.style.visibility = 'hidden';
    });
  }

}
