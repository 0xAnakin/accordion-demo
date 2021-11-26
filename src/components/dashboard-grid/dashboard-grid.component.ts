import { Component, Input } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  
}