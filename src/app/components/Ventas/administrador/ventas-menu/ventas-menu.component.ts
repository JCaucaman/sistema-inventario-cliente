import { Component } from '@angular/core';
import { ProductoCompartirService } from "src/app/services/ventas-administrador/producto-compartir.service";

@Component({
  selector: 'app-ventas-menu',
  templateUrl: './ventas-menu.component.html',
  styleUrls: ['./ventas-menu.component.css']
})
export class VentasMenuComponent {

  constructor(
    public ProductoCompartirService: ProductoCompartirService
  ){}


  productoAparecerModal(){
    this.ProductoCompartirService.modalProducto = true
  }
}
