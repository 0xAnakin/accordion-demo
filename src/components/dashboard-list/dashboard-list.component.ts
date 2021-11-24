import { Component, Input } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent {

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