import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  rutaDeLaColeccion = '/productos';
  referenciaAlaColeccion: AngularFirestoreCollection<Producto>;

  constructor(private bd: AngularFirestore, public router: Router) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  Crear(producto:Producto, redirect?:string):any
  {
    return this.referenciaAlaColeccion.add({...producto}).then(
      (res: any) => {
        if (redirect){
          this.router.navigate([redirect])
        }
      }
    );
  }

  ObtenerTodos(): any
  {
    return this.referenciaAlaColeccion.valueChanges()
  }

  BorrarMensaje(id:any):Promise<void>
  {
   return this.referenciaAlaColeccion.doc(id).delete();

  }

  ModificarMensaje(id:any, datos:any):Promise<void>
  {
   return this.referenciaAlaColeccion.doc(id).update(datos);

  }}
