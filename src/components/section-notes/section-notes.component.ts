import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-notes',
  templateUrl: './section-notes.component.html',
  styleUrls: ['./section-notes.component.scss']
})
export class SectionNotesComponent implements OnInit {

  @Input() data: any;

  ngOnInit(){
    // console.debug("notes section:", this.data);
  }

  printJSON(entry: any) {
    return JSON.stringify(entry, null, 4);
  }

}
