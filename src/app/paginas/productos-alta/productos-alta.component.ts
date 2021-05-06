import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { Producto } from 'src/app/clases/producto';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-productos-alta',
  templateUrl: './productos-alta.component.html',
  styleUrls: ['./productos-alta.component.scss']
})
export class ProductosAltaComponent implements OnInit {

  producto: Producto ;

  constructor(private storeService:FirestoreService) {
    this.producto = new Producto();
  }

  addProducto(){
    console.log(this.producto);
    
    this.storeService.Crear(this.producto, 'productos')
  }

  handleSelect = (pais:Pais) => {
    this.producto.pais = pais
  }

  ngOnInit(): void {
  }
}
