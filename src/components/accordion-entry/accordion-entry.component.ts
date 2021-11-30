import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-entry',
  templateUrl: './accordion-entry.component.html',
  styleUrls: ['./accordion-entry.component.scss']
})
export class AccordionEntryComponent implements OnInit {

  @Input() entry: any;

  open: boolean = false;

  ngOnInit() {

    try {

      if (typeof this.entry.expanded === 'string') {
        this.open = JSON.parse(this.entry.expanded);
      } else if (typeof this.entry.expanded === 'boolean') {
        this.open = this.entry.expanded;
      }

    } catch(err) {
      console.debug('invalid expanded value for entry', this.entry)
    }

  }

  isOpen() {
    return this.open;
  }

  onClick($event: any) {

    const entry = $event.target.closest('.custom-accordion-entry');
    const element = entry.querySelector('.custom-accordion-body-inner');
    const parent = entry.closest('.custom-accordion-body-inner');

    if (parent) {

      parent.parentNode.style.maxHeight = ``;
      element.parentNode.style.maxHeight = `${element.getBoundingClientRect().height}px`;

    } else {
      element.parentNode.style.maxHeight = `${element.getBoundingClientRect().height}px`;
    }

    requestAnimationFrame(() => {
      this.open = !this.open;
    })

  }

  printJSON(entry: any) {
    return JSON.stringify(entry, null, 4);
  }

}
