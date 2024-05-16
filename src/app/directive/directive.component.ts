import { Component } from '@angular/core';
import { AttdirectiveDirective } from './attdirective.directive';
import { StructuralDirective } from './structural.directive';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [AttdirectiveDirective, StructuralDirective],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  isHidden = false;

  change() {
    this.isHidden= !this.isHidden;
  }
}
