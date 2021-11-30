import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-table',
  templateUrl: './section-table.component.html',
  styleUrls: ['./section-table.component.scss']
})
export class SectionTableComponent implements OnInit {

  @Input() data: any;

  ngOnInit() {
    // console.debug("table section:", this.data);
  }

  convert(data: any) {

    const converted = new Array();

    for (let x = 0; x < data.length; x++) {

      converted[x] = [data[x].column];

      for (let y = 0; y < data[x].rows.length; y++) {
        converted[x].push(typeof data[x].rows[y].value.text === 'string' ? data[x].rows[y].value.text : data[x].rows[y].value);
      }

    }

    const [row] = converted;
    const transposed = row.map((value: any, column: any) => {
      return converted.map(row => row[column])
    });

    // console.debug('transposed:', transposed);

    return transposed;

  }

  isText(obj:any) {
    return typeof obj === 'string';
  }

  printJSON(entry: any) {
    return JSON.stringify(entry, null, 4);
  }

}
