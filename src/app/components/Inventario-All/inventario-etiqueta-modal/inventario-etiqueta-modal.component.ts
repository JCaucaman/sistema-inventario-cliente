import { Component } from '@angular/core';
import { EtiquetaService } from "../../../services/inventario/etiqueta.service";
import { EtiquetaCompartirService } from "../../../services/inventario/etiqueta-compartir.service";
import { EtiquetaModificarService } from "../../../services/inventario/etiqueta-modificar.service";
@Component({
  selector: 'app-inventario-etiqueta-modal',
  templateUrl: './inventario-etiqueta-modal.component.html',
  styleUrls: ['./inventario-etiqueta-modal.component.css']
})
export class InventarioEtiquetaModalComponent {

  etiqueta = {
    name : '',
    color_etiqueta : '#000000'
  }

  constructor(
    private EtiquetaService : EtiquetaService,
    public EtiquetaCompartirService : EtiquetaCompartirService,
    public EtiquetaModificarService : EtiquetaModificarService
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
          name : '',
          color_etiqueta : '#000000'
        }
      },
      err => {
        console.log(err)
      }

    )
  }


  modificarEtiqueta(){
    console.log(this.etiqueta)
    this.EtiquetaService.etiquetaModificar(
      this.EtiquetaModificarService.id,
      this.EtiquetaModificarService.etiquetaModificado
    ).subscribe(
      res => {
        this.desaparecer()
        this.EtiquetaModificarService.modificarEtiquetaLocal()
        this.etiqueta = {
          name : '',
          color_etiqueta : '#000000'
        }
      },
      err => {
        console.log(err)
      }
    )
  }

}
