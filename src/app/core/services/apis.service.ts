import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { People } from '../models/people';
import { HttpService } from '../providers/http.service';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private httpProvider: HttpService) { }

  getPeople() {
    const api = 'http://private-anon-c25285e6ad-testphonebook.apiary-mock.com/persona';
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };

    return this.httpProvider.get(api, httpHeaders);
  }

  getRegions() {
    const api = 'http://private-anon-c25285e6ad-testphonebook.apiary-mock.com/region';
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };

    return this.httpProvider.get(api, httpHeaders);
  }

}
