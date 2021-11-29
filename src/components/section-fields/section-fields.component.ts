import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-fields',
  templateUrl: './section-fields.component.html',
  styleUrls: ['./section-fields.component.scss']
})
export class SectionFieldsComponent implements OnInit {

  @Input() data: any;

  ngOnInit(){
    console.debug("fields section:", this.data);
  }

  printJSON(entry: any) {
    return JSON.stringify(entry, null, 4);
  }

}
