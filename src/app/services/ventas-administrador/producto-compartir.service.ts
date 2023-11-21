import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoCompartirService {

  Productos : any = []
  modalProducto: boolean = false
  modalModificarProducto : boolean = false
  idProducto = ''
  productoModifiacado : any 


  constructor() { }

  ingresarProducto(producto: any){
    this.Productos.unshift(producto)
  }

  quitarProducto(idProducto: string){
    const documento = this.Productos.find((d : any) => d._id == idProducto);
    const indice =  this.Productos.indexOf(documento);

    this.Productos.splice(indice, 1);
  }

  modificarProducto(producto : any){
    const documento = this.Productos.find((d : any) => d._id == producto._id);
    const indice =  this.Productos.indexOf(documento);

    this.Productos.splice(indice, 1, producto);

  }

}
