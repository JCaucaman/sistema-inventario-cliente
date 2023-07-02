import { Component } from '@angular/core';
import { CompartirService } from "src/app/services/inventario/compartir.service";
import { CompartirInventarioModificarService } from "src/app/services/inventario/compartir-inventario-modificar.service";


@Component({
  selector: 'app-inventario-etiqueta-modal',
  templateUrl: './inventario-etiqueta-modal.component.html',
  styleUrls: ['./inventario-etiqueta-modal.component.css']
})
export class InventarioEtiquetaModalComponent {

  etiqueta = {
    nombre : '',
    color : ''
  }

  constructor(
  //  private MaterialService : MaterialService,
    public CompartirService: CompartirService,
    public CompartirInventarioModificarService : CompartirInventarioModificarService
    ) { }

  desaparecer(){
    this.CompartirService.styleModalEtiqueta = 'visibility: hidden;'
  }
  
  crearEtiqueta(){
    console.log(this.etiqueta)
  }


  modificarMaterial(){
    console.log(this.etiqueta)
  }

}
