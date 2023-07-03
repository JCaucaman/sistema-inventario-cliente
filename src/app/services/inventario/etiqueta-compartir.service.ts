import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaCompartirService {

  etiquetas : any = []

  modalEtiqueta : boolean = false

  constructor() { }

  agregarEtiquetas(etiqueta: any) {
    this.etiquetas.unshift(etiqueta); 
  }

}
