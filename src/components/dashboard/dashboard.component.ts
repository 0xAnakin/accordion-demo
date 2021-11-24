import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PoliciesService } from '../../services/policies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  view: string = "grid";
  data: any = [];

  constructor(private policiesService: PoliciesService) { }

  ngOnInit() {

    this.policiesService.requestServiceData().subscribe(res => {

      this.data = res;

      console.debug('retrieved new policies data:', res);

    });

  }

  onGridViewClick($event: any) {
    this.view = "grid";
    console.debug("selected grid view");
  }

  onListViewClick($event: any) {
    this.view = "list";
    console.debug("selected list view");
  }

}