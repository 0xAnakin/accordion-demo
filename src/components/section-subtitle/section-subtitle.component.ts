import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-subtitle',
  templateUrl: './section-subtitle.component.html',
  styleUrls: ['./section-subtitle.component.scss']
})
export class SectionSubtitleComponent implements OnInit {

  @Input() data: any;

  ngOnInit(){
    console.debug("subtitile section:", this.data);
  }

  printJSON(entry: any) {
    return JSON.stringify(entry, null, 4);
  }

}
