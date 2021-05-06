import { Pais } from "./pais";

export class Producto {
    codigo:string = "";
    descripcion:string = "";
    precio:number = 0;
    stock:number = 0;
    pais: Pais = new Pais();
    comestible: boolean = false;
}
