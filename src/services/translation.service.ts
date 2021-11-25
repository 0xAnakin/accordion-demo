import { DOCUMENT } from '@angular/common';
import { Injectable, Inject, } from '@angular/core';
import { EL } from '../assets/locales/el.json';
import { EN } from '../assets/locales/en.json';

const objectResolvePath = require('object-resolve-path');

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private window: any;
  private locale: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
    this.locale = this.window.Liferay.ThemeDisplay.getLanguageId();
  }

  translate(key: string) {


    const localizationSet = (this.locale === 'el_GR' ? EL : EN);

    // console.debug('set:', localizationSet, 'locale:', this.locale, 'key:', key);

    if (key) {
      return objectResolvePath(localizationSet, key);
    }

    return "";

  }

}
