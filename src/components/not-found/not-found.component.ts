import { Component } from '@angular/core';
import { TranslationService } from 'src/services/translation.service';

@Component({
  selector: 'app-not-found-view-component',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(public translationService: TranslationService) { }
}