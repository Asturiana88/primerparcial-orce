import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit {
  @Input()
  get pais(): Pais{ return this._producto; }
  set pais(pais: Pais) {
    this._producto = pais;
  }
  private _producto : Pais = new Pais()
  constructor() { }

  ngOnInit() {
  }

}
