import { Component, OnInit } from '@angular/core';
import { ResizeService } from 'src/services/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private resizeService: ResizeService) { }

  ngOnInit() {
    this.resizeService.onResize$.subscribe(() => this.onWindowResize());
  }

  onWindowResize() {
    window.document.querySelectorAll('.custom-accordion-body-inner').forEach((element: any) => {
      element.parentNode.style.maxHeight = `${element.getBoundingClientRect().height}px`;
    })
  }
  
}
