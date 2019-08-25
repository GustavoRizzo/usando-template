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

  constructor( private apiControleClassico: ApiControleClassicoService ) { } 


  getFuncaoMockadaCoordenadaRandom(){
    this.randomTestResp = this.apiControleClassico.getFuncaoMockadaCoordenadaRandom();
  }

  ngOnInit() {
  }

}
