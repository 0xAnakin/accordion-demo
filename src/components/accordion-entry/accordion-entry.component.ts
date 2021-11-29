import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-entry',
  templateUrl: './accordion-entry.component.html',
  styleUrls: ['./accordion-entry.component.scss']
})
export class AccordionEntryComponent implements OnInit {

  @Input() entry: any;

  collapsed = true;

  ngOnInit() {
    this.collapsed = !(this.entry.expanded as boolean);
    console.debug("expanded:", this.entry.expanded, "collapsed:", this.collapsed);
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
      this.collapsed = !this.collapsed;
    })

  }

  printJSON(entry: any) {
    return JSON.stringify(entry, null, 4);
  }

}
