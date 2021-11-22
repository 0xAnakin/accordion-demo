import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {

  private url = 'http://localhost:4200/assets/policies.json';
  private data: any;

  constructor(private httpClient: HttpClient) { }

  requestServiceData(): Observable<Array<any>> {

    return new Observable(observer => {

      if (this.data) {
        observer.next(this.data);
        return observer.complete();
      }

      return this.httpClient.get(this.url).subscribe(res => {

        this.data = res;

        observer.next(this.data);
        observer.complete();

      });

    });

  }

}
