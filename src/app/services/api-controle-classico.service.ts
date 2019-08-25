import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiControleClassicoService {

  apiURL = 'http://127.0.0.1:5010/api/values';
  
  constructor( private _http : HttpClient) { }

  getUsers() {
    return this._http.get( this.apiURL );
  }
}
