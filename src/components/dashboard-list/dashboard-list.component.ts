import { Component, Input } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent {

  @Input() data: any = [];
  @Input() filters: any = [];

  objectKeys = Object.keys;
  
  shouldBeRendered(filter:string) {
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