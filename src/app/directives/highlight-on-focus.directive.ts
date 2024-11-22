import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {style} from "@angular/animations";

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective implements AfterViewInit {

  @Input() appHighlightOnFocus = '';

  constructor(private el: ElementRef) { }

 @HostListener('focus') onFocus(){

    this.focusHighlight(this.appHighlightOnFocus || '');
 }

 private focusHighlight(color:string){

    this.el.nativeElement.style.backgroundColor = color;

 }

  ngAfterViewInit(): void {
  }



}
