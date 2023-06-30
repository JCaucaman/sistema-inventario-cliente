import { Component } from '@angular/core';
import { MaterialService } from "src/app/services/material.service";
import { CompartirService } from "src/app/services/compartir.service";
import { CompartirInventarioModificarService } from "src/app/services/compartir-inventario-modificar.service";

@Component({
  selector: 'app-inventario-material-modal',
  templateUrl: './inventario-material-modal.component.html',
  styleUrls: ['./inventario-material-modal.component.css']
})

export class InventarioMaterialModalComponent {

  material = {
    nombre: '',
    origen: '',
    descripcion: '',
    cantidad: 0,
    precio: 0
  }

  constructor(
    private MaterialService : MaterialService,
    public CompartirService: CompartirService,
    public CompartirInventarioModificarService : CompartirInventarioModificarService
    ) { }

    desaparecer(){
      this.CompartirService.styleModalMaterial = 'visibility: hidden;'
      this.CompartirInventarioModificarService.cancalarModificacion()
    }

  crearMaterial(){
    this.MaterialService.materialCrear(this.material)
    .subscribe(
      res => {
        this.CompartirService.agregarMaterial(res)
        this.desaparecer()
        this.material = {
          nombre: '',
          origen: '',
          descripcion: '',
          cantidad: 0,
          precio: 0
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  modificarMaterial(){
    this.MaterialService.materialModificar(
      this.CompartirInventarioModificarService.id,
      this.CompartirInventarioModificarService.materialModificado)
      .subscribe(
        res => {
          console.log(res)
          this.desaparecer()

        },
        err => {
          console.log(err)
        }
      )
  }

}
