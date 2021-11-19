import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-entry-content',
  templateUrl: './accordion-entry-content.component.html',
  styleUrls: ['./accordion-entry-content.component.scss']
})
export class AccordionEntryContentComponent {

  @Input() data: any;

  printJSON() {
    return JSON.stringify(this.data, null, 4);
  }

}
