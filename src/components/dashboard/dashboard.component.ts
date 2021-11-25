import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PoliciesService } from '../../services/policies.service';
import { TranslationService } from 'src/services/translation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  view: string = "GRID";
  filters: any = [];
  data: any = [];

  constructor(public translationService:TranslationService, private policiesService: PoliciesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  objectKeys = Object.keys;

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {

      if (Array.isArray(params["filters"])) {
        this.filters = params["filters"];
      } else if (typeof params["filters"] === "string" && params["filters"].length) {
        this.filters = [params["filters"]];
      } else {
        this.filters = [];
      }

      if (this.filters.length) {
        this.view = "LIST";
      }

    });

    this.policiesService.requestServiceData().subscribe(res => {

      this.data = res;

      console.debug("retrieved new policies data:", res);

    });

  }

  onFilterClick($event: any, key: string) {

    $event.preventDefault();

    if (key === "all") {

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

    this.updateQueryParams();

  }

  onFilterRemoveClick($event: any, filter: string) {

    const idx = this.filters.indexOf(filter);

    if (idx > -1) {
      this.filters.splice(idx, 1);
    }

    this.updateQueryParams();

  }

  onGridViewClick($event: any) {

    this.view = "GRID";
    this.filters = [];

    this.updateQueryParams();

    console.debug("selected grid view");

  }

  onListViewClick($event: any) {

    this.view = "LIST";

    console.debug("selected list view");

  }

  updateQueryParams() {

    if (this.filters.length) {
      this.router.navigate([this.router.url.split("?")[0]], { queryParams: { filters: this.filters } });
    } else {
      this.router.navigate([this.router.url.split("?")[0]]);
    }

    console.debug("active filters:", this.filters ? this.filters : []);

  }

  getFilterLocalizationKey(filter:string="") {
    return `dashboard.filters.${filter}`;
  }

}