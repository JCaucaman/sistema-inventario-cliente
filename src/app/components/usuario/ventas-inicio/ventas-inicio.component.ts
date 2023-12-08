import { Component } from '@angular/core';
import { ProductoUsuarioService } from "src/app/services/ventas-usuario/producto-usuario.service";
import { ProductoUsuarioCompartirService } from "src/app/services/ventas-usuario/producto-usuario-compartir.service";


@Component({
  selector: 'app-ventas-inicio',
  templateUrl: './ventas-inicio.component.html',
  styleUrls: ['./ventas-inicio.component.css']
})
export class VentasInicioComponent {

  constructor(
    private ProductoUsuarioService: ProductoUsuarioService,
    public ProductoUsuarioCompartirService :ProductoUsuarioCompartirService
  ){}

  ngOnInit(){
    this.mostrarProductos()
  }

  agregarCarro(producto: any){
    return this.ProductoUsuarioCompartirService.agregarProducto(producto)
  }

  mostrarProductos(){
    this.ProductoUsuarioService.productoMostrar()
    .subscribe(
      res => {
        this.ProductoUsuarioCompartirService.Productos = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }
}
