import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss']
})
export class DashboardGridComponent {

  @Input() data: any = [];

  objectKeys = Object.keys;

  formatDate(date: string) {

    const arr = date.split("-");

    if (arr.length === 3) {
      return arr.reverse().join("/");
    }

    return date;

  }

  generateQueryParams(key: string) {
    return { [key]: 1 };
  }

}