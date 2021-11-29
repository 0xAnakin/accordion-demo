import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-entry-sections',
  templateUrl: './accordion-entry-sections.component.html',
  styleUrls: ['./accordion-entry-sections.component.scss']
})
export class AccordionEntrySectionsComponent {

  @Input() data: any;

  printJSON(entry: any) {
    return JSON.stringify(entry, null, 4);
  }

}
