import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/clases/producto';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  
  productos:  Observable<any>;
  selectedProd:  Producto = new Producto();
  constructor(private storeService:FirestoreService) {
    this.productos = storeService.ObtenerTodos()
  }

  
  handleDetails(producto:Producto){
    this.selectedProd = producto
    console.log(this.selectedProd);

  }
  handleCloseDetails(){
    this.selectedProd = new Producto()

  }
  ngOnInit(): void {
  }

}
