import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {
  @Input()
  get producto(): Producto{ return this._producto; }
  set producto(producto: Producto) {
    this._producto = producto;
  }
  private _producto : Producto = new Producto()


  constructor() { }

  ngOnInit() {
  }

}
