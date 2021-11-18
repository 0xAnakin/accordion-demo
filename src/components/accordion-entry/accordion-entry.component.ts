import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-entry',
  templateUrl: './accordion-entry.component.html',
  styleUrls: ['./accordion-entry.component.scss']
})
export class AccordionEntryComponent {

  @Input() data: any;
  expanded = false;

  onClick($event: any) {
    this.expanded = !this.expanded;
  }

}
