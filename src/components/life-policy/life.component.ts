import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PoliciesService } from 'src/services/policies.service';
import { LifeService } from 'src/services/life.service';
import { TranslationService } from 'src/services/translation.service';

@Component({
  selector: 'app-life-policy',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifePolicyComponent implements OnInit {

  title: string = "";
  policy: any = {};
  data: any = [];

  constructor(public translationService:TranslationService, private policiesService: PoliciesService, private lifeService: LifeService, private activatedRoute: ActivatedRoute, private location: Location) { }

  objectKeys = Object.keys;

  ngOnInit() {
    // facepalm
    this.activatedRoute.paramMap.subscribe(params => {

      if (params.has('id')) {

        const policyNo = decodeURIComponent(params.get('id') as string);

        console.debug('policyNo:', policyNo);

        this.policiesService.requestServiceData().subscribe(policies => {

          const tmp = this.toPlainObject(policies).Life;

          this.title = tmp.Dsc;

          for (let i = 0; i < tmp.Policies.length; i++) {
            if (tmp.Policies[i].PolicyNo === policyNo) {

              this.policy = tmp.Policies[i];

              this.lifeService.requestServiceData(this.policy).subscribe(data => {
                this.data = data;
              });

              console.debug('policy:', this.policy);

              break;
            }
          }

        });

      }

    });

  }

  formatDate(date: string) {

    const arr = date.split("-");

    if (arr.length === 3) {
      return arr.reverse().join("/");
    }

    return date;

  }

  toPlainObject(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  onPolicyNavBackClick($event: any) {

    $event.preventDefault();

    this.location.back();

  }

  onSwitchChange($event: any) {
    if ($event.currentTarget.checked) {
      console.debug('switch is ON');
    } else {
      console.debug('switch is OFF');
    }
  }

}
