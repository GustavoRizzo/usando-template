import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomEncoder } from './CustomEncoder';


@Injectable({
  providedIn: 'root'
})
export class ApiControleClassicoService {

  apiControleClassicoURL = 'http://127.0.0.1:5010';
  
  constructor( private _http : HttpClient) { }

  getFuncaoMockadaCoordenadaRandom() {

    return this._http.get( `${this.apiControleClassicoURL}/api/values` );

  }

  getFuncaoDefinidaCoordenadaRandom( cript_funct : string ){
    const parmsInput = new HttpParams()
      .set('teste' , 'testado! e como / também funciona?');
    
    return this._http.get( `${this.apiControleClassicoURL}/api/values/${cript_funct}` , { params :parmsInput} );
  }

  getFuncaoSolve(){

    const parmsInput = new HttpParams({encoder: new CustomEncoder()})
      .set('str_func', 'x+33')
      .set('coordenada', '1');
    
    return this._http.get( `${this.apiControleClassicoURL}/api/FuncaoBasica` , { params :parmsInput} );
  }

}
