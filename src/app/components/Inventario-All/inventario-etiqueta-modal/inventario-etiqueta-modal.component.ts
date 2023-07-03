import { Component } from '@angular/core';
import { CompartirService } from "src/app/services/inventario/compartir.service";
import { CompartirInventarioModificarService } from "src/app/services/inventario/compartir-inventario-modificar.service";
import { EtiquetaCompartirService } from "../../../services/inventario/etiqueta-compartir.service";

@Component({
  selector: 'app-inventario-etiqueta-modal',
  templateUrl: './inventario-etiqueta-modal.component.html',
  styleUrls: ['./inventario-etiqueta-modal.component.css']
})
export class InventarioEtiquetaModalComponent {

  etiqueta = {
    nombre : '',
    color : '#000000'
  }

  constructor(
    public CompartirService: CompartirService,
    public CompartirInventarioModificarService : CompartirInventarioModificarService,
    public EtiquetaCompartirService : EtiquetaCompartirService
    ) { }

  desaparecer(){
    this.EtiquetaCompartirService.modalEtiqueta = false
  }
  
  crearEtiqueta(){
    console.log(this.etiqueta)
  }


  modificarMaterial(){
    console.log(this.etiqueta)
  }

}
