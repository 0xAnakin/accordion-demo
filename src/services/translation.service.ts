import { DOCUMENT } from '@angular/common';
import { Injectable, Inject, } from '@angular/core';
import { EL } from '../assets/locales/el.json';
import { EN } from '../assets/locales/en.json';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private window: any;
  public i18n: any;
  public lang_id: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
    this.lang_id = this.window.Liferay.ThemeDisplay.getLanguageId();
    this.i18n = (this.lang_id === 'el_GR' ? EL : EN);
  }

}
