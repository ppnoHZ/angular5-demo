import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null)
  }

  @Input('appHighlight') highlightColor: string;//别名，跟指令名字一样
  // @Input() highlightColor: string;
  

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
