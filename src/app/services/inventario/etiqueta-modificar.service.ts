import { Injectable } from '@angular/core';
import { EtiquetaCompartirService } from "./etiqueta-compartir.service";


@Injectable({
  providedIn: 'root'
})
export class EtiquetaModificarService {

  constructor(
    public EtiquetaCompartirService : EtiquetaCompartirService,
  ) { }

  modificar : boolean = false


  copy_etiquetaModificado : any

  id = ''

  etiquetaModificado = {
    _id: this.id,
    name: '',
    color_etiqueta : ''
  }

  modificarEtiquetaLocal(){

    const dato = this.EtiquetaCompartirService.etiquetas.find(
      (dato : any) => dato._id == this.id
    )

    const indice =  this.EtiquetaCompartirService.etiquetas.indexOf(dato)
    console.log(indice)
    console.log(this.EtiquetaCompartirService.etiquetas.splice(indice, 1, this.etiquetaModificado))
  }
}
