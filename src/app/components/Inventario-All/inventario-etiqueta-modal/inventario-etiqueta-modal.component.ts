import { Component } from '@angular/core';
import { EtiquetaService } from "../../../services/inventario/etiqueta.service";
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
    private EtiquetaService : EtiquetaService,
    public CompartirInventarioModificarService : CompartirInventarioModificarService,
    public EtiquetaCompartirService : EtiquetaCompartirService
    ) { }

  desaparecer(){
    this.EtiquetaCompartirService.modalEtiqueta = false
  }
  
  crearEtiqueta(){
    console.log(this.etiqueta)
    this.EtiquetaService.etiquetaCrear(this.etiqueta)
    .subscribe(
      res => {
        this.EtiquetaCompartirService.agregarEtiquetas(res)
        this.desaparecer()
        this.etiqueta = {
          nombre : '',
          color : '#000000'
        }
      },
      err => {
        console.log(err)
      }

    )
  }


  modificarEtiqueta(){
    console.log(this.etiqueta)
  }

}
