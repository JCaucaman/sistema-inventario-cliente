import { Component } from '@angular/core';
import { ProductoAdminService } from "../../../../services/ventas-administrador/producto-admin.service";
import { ProductoCompartirService } from "../../../../services/ventas-administrador/producto-compartir.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(
    private ProductoAdminService: ProductoAdminService,
    public ProductoCompartirService: ProductoCompartirService,
  ){}

  ngOnInit(){
    this.mostrarProductos()
  }

  mostrarProductos(){
    this.ProductoAdminService.productoMostrar()
    .subscribe(
      res => {
        this.ProductoCompartirService.Productos = res
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
}
