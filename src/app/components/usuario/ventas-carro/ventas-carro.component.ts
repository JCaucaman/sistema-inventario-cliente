import { Component } from '@angular/core';
import { ProductoUsuarioCompartirService } from "src/app/services/ventas-usuario/producto-usuario-compartir.service";

@Component({
  selector: 'app-ventas-carro',
  templateUrl: './ventas-carro.component.html',
  styleUrls: ['./ventas-carro.component.css']
})
export class VentasCarroComponent {

  constructor(
    public ProductoUsuarioCompartirService :ProductoUsuarioCompartirService
  ){}

  myCarro$ = this.ProductoUsuarioCompartirService.mycarro$

  totalPrecio(cantidad: number, precio: number){
    return cantidad * precio
  }

  borrarProducto(id: string){
    this.ProductoUsuarioCompartirService.borrarProducto(id)
  }

  actualizarCantidadProducto(operacion: string, id : string){
    let producto = this.ProductoUsuarioCompartirService.buscarProductoId(id)

    if(producto[0]){
      if(operacion === 'resta' && producto[0].cantidad > 0){
        producto[0].cantidad -= 1;
      }
      if(operacion === 'suma' && producto[0].cantidad < producto[0].cantidad_disponible){
        producto[0].cantidad += 1;
      }
      if(producto[0].cantidad === 0){
        this.borrarProducto(id)
      }
    }
  }

  totalCarro(){
    const result = this.ProductoUsuarioCompartirService.totalCarro();
    return result
  }

}