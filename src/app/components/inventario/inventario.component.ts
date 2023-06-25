import { Component } from '@angular/core';
import { MaterialService } from "../../services/material.service";

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  material = {
    nombre: '',
    cantidad: 0,
    descripcion: '',
    origen: '',
    etiquetas: [],
    'estado reserva': false
  }

  constructor(
    private MaterialService : MaterialService
  ){}

  materialMostrar(){
    this.MaterialService.materialMostrar()
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

}
