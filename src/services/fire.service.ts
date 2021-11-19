import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  
  private url = 'http://localhost:4200/assets/fire.json';
  
  constructor(private httpClient: HttpClient) { }

  requestServiceData(){
    return this.httpClient.get(this.url)
  }

}
