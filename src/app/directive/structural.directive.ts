import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]',
  standalone: true
})
export class StructuralDirective {

  hasSeen = false;

  constructor(private templateRef: TemplateRef<any>, private ViewContainerRef: ViewContainerRef) {
   }

  @Input() set appStructural(condition: boolean) {
    if (!condition && !this.hasSeen) {
      this.ViewContainerRef.createEmbeddedView(this.templateRef);
      this.hasSeen = true;
    }else if (condition && this.hasSeen) {
      this.ViewContainerRef.clear();
      this.hasSeen = false;
    }
  }

}
