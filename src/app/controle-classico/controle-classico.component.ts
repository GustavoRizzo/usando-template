import { Component, OnInit } from '@angular/core';
import { ApiControleClassicoService } from '../services/api-controle-classico.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-controle-classico',
  templateUrl: './controle-classico.component.html',
  styleUrls: ['./controle-classico.component.css']
})
export class ControleClassicoComponent implements OnInit {

  randomTestResp: any;
  randomTestResp2: any;
  resFuncaoSolve: any;

  in_str_funct: string;

  constructor( private apiControleClassico: ApiControleClassicoService ) { } 


  getFuncaoMockadaCoordenadaRandom(){
    this.randomTestResp = this.apiControleClassico.getFuncaoMockadaCoordenadaRandom();
  }

  getFuncaoDefinidaCoordenadaRandom(){
    this.randomTestResp2 = this.apiControleClassico.getFuncaoDefinidaCoordenadaRandom(this.in_str_funct);
  }

  getFuncaoSolve(){
    this.resFuncaoSolve = this.apiControleClassico.getFuncaoSolve();
  }

  ngOnInit() {
  }

}
