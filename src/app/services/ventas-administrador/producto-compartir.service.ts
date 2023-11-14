import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoCompartirService {

  Productos : any = []

  modalProducto: boolean = false

  constructor() { }

  ingresarProducto(producto: any){
    this.Productos.unshift(producto)
  }
}
