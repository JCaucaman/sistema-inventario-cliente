import { Component, ViewChild, ElementRef } from '@angular/core';
import { ProductoAdminService } from "../../../../services/ventas-administrador/producto-admin.service";
import { ProductoCompartirService } from "../../../../services/ventas-administrador/producto-compartir.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  idProducto: string = ''

  clicksCount = 0

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

  eliminarProducto(){
    this.ProductoAdminService.productoEliminar(this.idProducto)
    .subscribe(
      res => {
        this.ProductoCompartirService.quitarProducto(this.idProducto)
      },
      err => {
        console.log(err)
      }
    )
  }

  cambiarDisponbilidad(){

    var documento = this.ProductoCompartirService.Productos.filter(
      (producto: any) => producto._id == this.idProducto
    )

    const producto = {
      _id: this.idProducto,
      disponibilidad : !documento[0].disponibilidad
    }

    if (documento[0].cantidad_disponible != 0) {
      this.ProductoAdminService.productoModificar(this.idProducto, producto)
      .subscribe(
        res => {
          this.ProductoCompartirService.modificarProducto(res)
  
        },
        err => {
          console.log(err)
        }
      )
    } else {
      
    }
  }

  modificarProducto(){
    this.ProductoCompartirService.modalProducto = true
    this.ProductoCompartirService.modalModificarProducto = true

    const modProducto = this.ProductoCompartirService.Productos.filter(
      (producto: any) => producto._id == this.idProducto
    )

    this.ProductoCompartirService.productoModifiacado = { ...modProducto[0]}

    this.ProductoCompartirService.idProducto = this.idProducto
    this.clicksCount = 0
  }
  
  @ViewChild('menu') menu! :ElementRef

  contextmenuC(event: MouseEvent){
    event.preventDefault();

    const target = event.target as HTMLElement;
    this.idProducto = target.id.split('-')[0]

    if(this.idProducto.length == 24){
      this.menu.nativeElement.style.display = "block";
      this.menu.nativeElement.style.top = event.pageY + "px"
      this.menu.nativeElement.style.left = event.pageX + "px"

      this.clicksCount = 0
    } else {
      this.menu.nativeElement.style.display = "none";
    } 
  }

  clickC(event: MouseEvent){

    this.clicksCount ++
    if(this.clicksCount == 3){
      this.contextmenuC(event)
      this.clicksCount = 0
    } else {
      this.menu.nativeElement.style.display = "none";
    }
  }

  disappearContextProducto(){
    this.menu.nativeElement.style.display = "none";
    this.clicksCount = 0
  }

}
