import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LifeService } from '../../services/life.service';

@Component({
  selector: 'app-life-policy',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifePolicyComponent implements OnInit {

  data: any = [];

  constructor(private lifeService: LifeService) { }

  ngOnInit() {

    this.lifeService.requestServiceData().subscribe(res => {

      this.data = res;

      console.debug('retrieved new life data:', res);

    });

  }

}
