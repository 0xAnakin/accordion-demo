import { Component, OnInit } from '@angular/core';
import { LifeService } from '../../services/life.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: {life: Array<any>, fire: Array<any>, motor: Array<any>} = {
    life: [],
    fire: [],
    motor: []
  };

  constructor(private service: LifeService) { }

  ngOnInit() {

    this.service.requestLifeServiceData().subscribe(res => {

      this.data.life = res as any[];
      
      console.debug('retrieved new life data:', this.data);

    });

  }

}
