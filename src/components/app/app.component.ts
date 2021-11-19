import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {

    window.addEventListener('resize', this.updateAccordionHeights);
    
  }

  updateAccordionHeights() {

    window.document.querySelectorAll('.custom-accordion-body-inner').forEach((element: any) => {
      element.parentNode.style.maxHeight = `${element.getBoundingClientRect().height}px`;
    })

  }

}
