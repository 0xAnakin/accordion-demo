import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PoliciesService } from '../../services/policies.service';
import { MotorService } from '../../services/motor.service';
import { TranslationService } from 'src/services/translation.service';

@Component({
  selector: 'app-motor-policy',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MotorPolicyComponent implements OnInit {

  title: string = "";
  policy: any = {};
  data: any = [];

  constructor(public translationService:TranslationService, private policiesService: PoliciesService, private motorService: MotorService, private activatedRoute: ActivatedRoute, private location: Location) { }

  objectKeys = Object.keys;

  ngOnInit() {
    // facepalm
    this.activatedRoute.paramMap.subscribe(params => {

      if (params.has('id')) {

        const policyNo = decodeURIComponent(params.get('id') as string);

        console.debug('policyNo:', policyNo);

        this.policiesService.requestServiceData().subscribe(policies => {
          
          const tmp = this.toPlainObject(policies).Motor;

          this.title = tmp.Dsc;
          
          for (let i = 0; i < tmp.Policies.length; i++) {
            if (tmp.Policies[i].PolicyNo === policyNo) {

              this.policy = tmp.Policies[i];
              
              this.motorService.requestServiceData(this.policy).subscribe(data => {
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
