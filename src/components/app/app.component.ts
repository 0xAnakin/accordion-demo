import { Component, OnInit } from '@angular/core';
import { LifeService } from '../../services/life.service';
import { FireService } from '../../services/fire.service';
import { MotorService } from '../../services/motor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: { life: Array<any>, fire: Array<any>, motor: Array<any> } = {
    life: [],
    fire: [],
    motor: []
  };

  constructor(private lifeService: LifeService, private fireService: FireService, private motorService: MotorService) { }

  ngOnInit() {

    window.addEventListener('resize', this.updateAccordionHeights);

    this.lifeService.requestServiceData().subscribe(res => {

      this.data.life = res as any[];

      console.debug('retrieved new life data:', res);

    });

    this.fireService.requestServiceData().subscribe(res => {

      this.data.fire = res as any[];

      console.debug('retrieved new fire data:', res);

    });
    
    this.motorService.requestServiceData().subscribe(res => {

      this.data.motor = res as any[];

      console.debug('retrieved new motor data:', res);

    });    

  }

  updateAccordionHeights() {
    window.document.querySelectorAll('.custom-accordion-body-inner').forEach((element: any) => {
      element.parentNode.style.maxHeight = `${element.getBoundingClientRect().height}px`;
    })
  }

}
