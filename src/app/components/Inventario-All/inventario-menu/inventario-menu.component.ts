import { Component } from '@angular/core';
import { CompartirService } from "src/app/services/compartir.service";

@Component({
  selector: 'app-inventario-menu',
  templateUrl: './inventario-menu.component.html',
  styleUrls: ['./inventario-menu.component.css']
})
export class InventarioMenuComponent {

  constructor(
    private Visibilidad: CompartirService
  ){ }


  aparecer(){
    this.Visibilidad.styleModalMaterial = 'visibility: visible;'
  }
}
