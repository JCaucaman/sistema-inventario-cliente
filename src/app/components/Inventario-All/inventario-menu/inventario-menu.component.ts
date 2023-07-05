import { Component } from '@angular/core';
import { CompartirService } from "src/app/services/inventario/compartir.service";
import { EtiquetaCompartirService } from "src/app/services/inventario/etiqueta-compartir.service";
import { CompartirInventarioModificarService } from "src/app/services/inventario/compartir-inventario-modificar.service";
import { EtiquetaModificarService } from 'src/app/services/inventario/etiqueta-modificar.service'

@Component({
  selector: 'app-inventario-menu',
  templateUrl: './inventario-menu.component.html',
  styleUrls: ['./inventario-menu.component.css']
})
export class InventarioMenuComponent {

  constructor(
    private etiquetaVisibilidad: EtiquetaCompartirService,
    private materialesVisibilidad: CompartirService,
    public CompartirInventarioModificarService : CompartirInventarioModificarService,
    public EtiquetaModificarService : EtiquetaModificarService
  ){ }


  aparecer(){
    this.materialesVisibilidad.modalMaterial = true
    this.CompartirInventarioModificarService.modificar = false
  }

  aparecerEtiqueta(){
    this.etiquetaVisibilidad.modalEtiqueta = true
    this.EtiquetaModificarService.modificar = false
  }
}
