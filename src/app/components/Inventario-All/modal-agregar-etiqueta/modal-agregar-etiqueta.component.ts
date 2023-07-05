import { Component } from '@angular/core';
import { EtiquetaCompartirService } from "../../../services/inventario/etiqueta-compartir.service";
import { ModalAgregarEtiquetaService } from '../../../services/inventario/modal-agregar-etiqueta.service'

@Component({
  selector: 'app-modal-agregar-etiqueta',
  templateUrl: './modal-agregar-etiqueta.component.html',
  styleUrls: ['./modal-agregar-etiqueta.component.css']
})
export class ModalAgregarEtiquetaComponent {



  constructor(
    public EtiquetaCompartirService : EtiquetaCompartirService,
    public ModalAgregarEtiquetaService : ModalAgregarEtiquetaService
  ){}

  exit(){
    this.ModalAgregarEtiquetaService.modal = false
  }
  
}
