import { Component, OnInit} from '@angular/core';
import { ProductoCompartirService } from "src/app/services/ventas-administrador/producto-compartir.service";
import { ProductoAdminService } from "src/app/services/ventas-administrador/producto-admin.service";


@Component({
  selector: 'app-ventas-productos-modal',
  templateUrl: './ventas-productos-modal.component.html',
  styleUrls: ['./ventas-productos-modal.component.css']
})
export class VentasProductosModalComponent implements OnInit {

  constructor(
    public ProductoCompartirService: ProductoCompartirService,
    private ProductoAdminService: ProductoAdminService,
  ){}

  file : File | string = '';
  imagenSelected: ArrayBuffer | string = '';
  
  producto = {
    nombre: '',
    cantidad_disponible: 0,
    precio: 0,
    descripcion: '',
  }

  ngOnInit(){

  }

  cerrar(){
    this.ProductoCompartirService.modalProducto = false
  }

  crearProducto(){

    let producto = new FormData()

    producto.append('nombre', this.producto.nombre);
    producto.append('cantidad_disponible', this.producto.cantidad_disponible.toString());
    producto.append('precio', this.producto.precio.toString())
    producto.append('descripcion', this.producto.descripcion.toString())
    producto.append('imagen', this.file)

    this.ProductoAdminService.productoCrear(producto)
    .subscribe(
      res => {
        this.ProductoCompartirService.ingresarProducto(res)
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )

   console.log(this.file)

    this.cerrar()
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
