import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  get(api: string, options: any): Promise<any> {
    return new Promise<any>((resolve) => {
      this.http.get(api, options).pipe(timeout(30000)).subscribe((response: any) => {
        resolve(response);
      }, err => {
        resolve(false);
      });
    });
  }
}
