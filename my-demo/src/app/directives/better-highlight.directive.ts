import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[myappBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private eleRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    // // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');

    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventdata: Event) {
    // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor; 
  }
  @HostListener('mouseleave') mouseout(eventdata: Event) {
    // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}