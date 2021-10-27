import { Injectable } from '@angular/core';
import { CatImages } from './app.models';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// let myHeaders: HttpHeaders;

@Injectable({
  providedIn: 'root'
})

export class Services {
  constructor(private http: HttpClient) {}

  // headers = new HttpHeaders()
  //   .set('x-api-key', 'a01078c7-2037-41a7-93d9-5bd99828d366')
  //   .set('pagination-count', '100');

  params = new HttpParams()
    .set('limit', '100')
    .set('order', 'asc');

  getCats(): Observable<CatImages[]> {
    const launchesUrl = 'https://api.thecatapi.com/v1/images/search';
    const headers = new HttpHeaders()
       .set('x-api-key', 'a01078c7-2037-41a7-93d9-5bd99828d366')
       .set('pagination-count', '100');
    console.log(headers);
    return this.http.get<CatImages[]>(`${launchesUrl}?${this.params}`, {headers: headers});
  }
}