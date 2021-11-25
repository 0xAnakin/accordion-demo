import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-policy',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyPolicyComponent implements OnInit {

  data: any = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {

    this.propertyService.requestServiceData({}).subscribe(res => {

      this.data = res;

      console.debug('retrieved new fire data:', res);

    });

  }

}
