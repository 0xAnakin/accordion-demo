import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PoliciesService } from '../../services/policies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  view: string = "GRID";
  filters: any = [];
  data: any = [];

  constructor(private policiesService: PoliciesService) { }

  objectKeys = Object.keys;

  ngOnInit() {

    this.policiesService.requestServiceData().subscribe(res => {

      this.data = res;

      console.debug('retrieved new policies data:', res);

    });

  }

  onFilterClick($event: any, key: string) {

    $event.preventDefault();

    if (key === 'All') {
      
      if (this.filters.length) {
        this.filters = [];
      }

    } else {

      const idx = this.filters.indexOf(key);

      if (idx > -1) {
        this.filters.splice(idx, 1);
      } else {
        this.filters = [...this.filters, key];
      }

    }

    console.debug("active filters:", this.filters.join(', '));

  }

  onFilterRemoveClick($event:any, filter:string){
    
    const idx = this.filters.indexOf(filter);

    if (idx > -1) {
      this.filters.splice(idx, 1);
    }

    console.debug("active filters:", this.filters.join(', '));

  }

  onGridViewClick($event: any) {
    this.view = "GRID";
    console.debug("selected grid view");
  }

  onListViewClick($event: any) {
    this.view = "LIST";
    console.debug("selected list view");
  }

}