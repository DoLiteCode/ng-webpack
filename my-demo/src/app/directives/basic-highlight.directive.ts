import {Directive, OnInit, ElementRef} from "@angular/core";

@Directive({
  selector: '[myappBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  
  constructor(private eleRef: ElementRef) {

  }

  ngOnInit() {
    this.eleRef.nativeElement.style.backgroundColor = "green";
  }
}