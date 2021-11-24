import { Component, Input, OnInit } from '@angular/core';
import { ResizeService } from '../../services/resize.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  @Input() data: any = [];
  @Input() filters: any = [];

  deviceWidth: number = window.innerWidth;

  constructor(private resizeService: ResizeService) { }

  objectKeys = Object.keys;

  ngOnInit() {
    this.resizeService.onResize$.subscribe(() => this.onWindowResize());
  }

  onWindowResize() {
    this.deviceWidth = window.innerWidth;
  }

}