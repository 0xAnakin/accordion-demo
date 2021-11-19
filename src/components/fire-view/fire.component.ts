import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FireService } from '../../services/fire.service';

@Component({
  selector: 'app-fire-view-component',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.scss']
})
export class FireComponent implements OnInit {

  data: any = [];

  constructor(private fireService: FireService) { }

  ngOnInit() {

    this.fireService.requestServiceData().subscribe(res => {

      this.data = res;

      console.debug('retrieved new fire data:', res);

    });

  }

}
