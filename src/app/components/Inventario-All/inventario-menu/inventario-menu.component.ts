import { Component } from '@angular/core';
import { CompartirService } from "src/app/services/compartir.service";
import { CompartirInventarioModificarService } from "src/app/services/compartir-inventario-modificar.service";

@Component({
  selector: 'app-inventario-menu',
  templateUrl: './inventario-menu.component.html',
  styleUrls: ['./inventario-menu.component.css']
})
export class InventarioMenuComponent {

  constructor(
    private Visibilidad: CompartirService,
    public CompartirInventarioModificarService : CompartirInventarioModificarService
  ){ }


  aparecer(){
    this.Visibilidad.styleModalMaterial = 'visibility: visible;'
    this.CompartirInventarioModificarService.modificar = false
  }
}
