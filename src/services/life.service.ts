import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LifeService {
  
  private url = 'http://localhost:4200/assets/life.json';
  
  constructor(private httpClient: HttpClient) { }

  requestLifeServiceData(){
    return this.httpClient.get(this.url)
  }

}
