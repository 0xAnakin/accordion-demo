import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MotorService } from '../../services/motor.service';

@Component({
  selector: 'app-motor-policy',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MotorPolicyComponent implements OnInit {

  data: any = [];

  constructor(private motorService: MotorService, private location: Location) { }

  ngOnInit() {

    this.motorService.requestServiceData().subscribe(res => {

      this.data = res;

      console.debug('retrieved new motor data:', res);

    });

  }

  onPolicyNavBackClick($event: any) {

    $event.preventDefault();
    
    this.location.back();

  }

}
