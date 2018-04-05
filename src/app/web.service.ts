import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import  'rxjs/add/operator/map';
import { Http,Headers,URLSearchParams, RequestOptions} from '@angular/http';

@Injectable()
export class WebService {

  constructor(private http:Http) { }
  
  getData(){

    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map((res:Response) => res.json());
  }
}
