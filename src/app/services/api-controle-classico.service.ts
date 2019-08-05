import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiControleClassicoService {

  apiURL = 'https://jsonplaceholder.typicode.com/users';
  
  constructor( private _http : HttpClient) { }

  getUsers() {
    return this._http.get( this.apiURL );
  }
}
