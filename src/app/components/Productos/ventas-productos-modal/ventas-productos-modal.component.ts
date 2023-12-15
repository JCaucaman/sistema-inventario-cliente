import { Component} from '@angular/core';
import { ProductoCompartirService } from "src/app/services/ventas-administrador/producto-compartir.service";
import { ProductoAdminService } from "src/app/services/ventas-administrador/producto-admin.service";
import { RutaService } from "../../../services/ruta.service";

@Component({
  selector: 'app-ventas-productos-modal',
  templateUrl: './ventas-productos-modal.component.html',
  styleUrls: ['./ventas-productos-modal.component.css']
})
export class VentasProductosModalComponent{

  constructor(
    public ProductoCompartirService: ProductoCompartirService,
    private ProductoAdminService: ProductoAdminService,
    public URL : RutaService
  ){}

  file : File | string = '';
  imagenSelected: ArrayBuffer | string = '';
  
  producto = {
    nombre: '',
    cantidad_disponible: 0,
    precio: 0,
    descripcion: '',
  }

  cerrar(){
    this.ProductoCompartirService.modalProducto = false
  }

  crearProducto(){

    const producto = new FormData()

    producto.append('nombre', this.producto.nombre);
    producto.append('cantidad_disponible', this.producto.cantidad_disponible.toString());
    producto.append('precio', this.producto.precio.toString())
    producto.append('descripcion', this.producto.descripcion.toString())
    producto.append('imagen', this.file)

    console.log(producto)

    this.ProductoAdminService.productoCrear(producto)
    .subscribe(
      res => {
        this.ProductoCompartirService.ingresarProducto(res)
        console.log(res)

        this.producto = {
          nombre: '',
          cantidad_disponible: 0,
          precio: 0,
          descripcion: '',
        }

        this.file = '';
        this.imagenSelected = '';

        this.cerrar()
      },
      err => {
        console.log(err)
      }
    )
  }

  modificarProducto(){

    console.log(this.ProductoCompartirService.productoModifiacado)

    const productoN = new FormData()

    productoN.append('nombre', this.ProductoCompartirService.productoModifiacado.nombre);
    productoN.append('cantidad_disponible', this.ProductoCompartirService.productoModifiacado.cantidad_disponible);
    productoN.append('precio', this.ProductoCompartirService.productoModifiacado.precio)
    productoN.append('descripcion', this.ProductoCompartirService.productoModifiacado.descripcion)
    productoN.append('imagen', this.file)

    this.ProductoAdminService.productoModificar(this.ProductoCompartirService.idProducto, productoN)
    .subscribe(
      res => {
        
        this.ProductoCompartirService.modificarProducto(res)

        this.cerrar()
      },
      err => {
        console.log(err)
      }
    )

  }

  onFotoSeleccionada(event : Event) : void {
    const inputElement = event.target as HTMLInputElement;

    console.log(inputElement.files)

    if(inputElement.files && inputElement.files[0]){
      this.file = <File>inputElement.files[0];

      const reader = new FileReader();

      reader.onload = e => {
        if (reader.result !== null) {
          this.imagenSelected = reader.result;
        }
      };

      reader.readAsDataURL(this.file)

    }
  }

}
