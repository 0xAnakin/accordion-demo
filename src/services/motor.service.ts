import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotorService {
  
  private url = 'http://localhost:4200/assets/motor.json';
  
  constructor(private httpClient: HttpClient) { }

  requestServiceData(){
    return this.httpClient.get(this.url)
  }

}
