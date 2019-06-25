import { Directive, HostListener, HostBinding, ElementRef, Renderer2, OnInit, ViewChild } from "@angular/core";

@Directive({
  selector: '[myappDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show') isOpen = false;

  constructor(private eleRef: ElementRef, private render: Renderer2) {
  }
  ngOnInit() {
    //
  }
  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.eleRef.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
    //console.log(this.eleRef.nativeElement.getElementsByClassName('dropdown-menu'));
    //console.log(this.dropDownMenu);
  }
}