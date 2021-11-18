import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-entry',
  templateUrl: './accordion-entry.component.html',
  styleUrls: ['./accordion-entry.component.scss']
})
export class AccordionEntryComponent implements OnInit {

  @Input() data: any;
  @Input() expanded: any;
  open = false;

  ngOnInit() {
    this.open = this.expanded as boolean;
    console.debug('data:', this.data, 'expanded:', this.expanded);
  }

  onClick($event: any) {
    this.open = !this.open;
  }

}
