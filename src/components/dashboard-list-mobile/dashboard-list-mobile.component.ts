import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from 'src/services/translation.service';

@Component({
  selector: 'app-dashboard-list-mobile',
  templateUrl: './dashboard-list-mobile.component.html',
  styleUrls: ['./dashboard-list-mobile.component.scss']
})
export class DashboardListMobileComponent {

  @Input() data: any = [];
  @Input() filters: any = [];

  constructor(public translationService:TranslationService, private router: Router) { }

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

  onRecordCLick($event: any, key: string, record: any) {
    this.router.navigate([`/${key.toLowerCase()}/${encodeURIComponent(record.PolicyNo)}`]);
  }

}