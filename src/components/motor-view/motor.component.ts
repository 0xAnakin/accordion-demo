import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MotorService } from '../../services/motor.service';

@Component({
  selector: 'app-motor-view-component',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MotorComponent implements OnInit {

  data: any = [];

  constructor(private motorService: MotorService) { }

  ngOnInit() {

    this.motorService.requestServiceData().subscribe(res => {

      this.data = res;

      console.debug('retrieved new motor data:', res);

    });

  }

}
