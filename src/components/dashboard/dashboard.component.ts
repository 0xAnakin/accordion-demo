import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PoliciesService } from '../../services/policies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any = [];

  objectKeys = Object.keys;

  constructor(private policiesService: PoliciesService) { }

  ngOnInit() {

    this.policiesService.requestServiceData().subscribe(res => {

      this.data = res;

      console.debug('retrieved new policies data:', res);

    });

  }

}