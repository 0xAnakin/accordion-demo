import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-list-desktop',
  templateUrl: './dashboard-list-desktop.component.html',
  styleUrls: ['./dashboard-list-desktop.component.scss']
})
export class DashboardListDesktopComponent {

  @Input() data: any = [];
  @Input() filters: any = [];
  
  objectKeys = Object.keys;

  shouldBeRendered(filter: string) {
    if (!this.filters.length) {
      return true;
    } else {
      return this.filters.includes(filter);
    }
  }

  formatDate(date: string) {

    const arr = date.split("-");

    if (arr.length === 3) {
      return arr.reverse().join("/");
    }

    return date;

  }

}