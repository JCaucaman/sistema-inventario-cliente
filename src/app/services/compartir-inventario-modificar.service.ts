import { Injectable } from '@angular/core';
import { CompartirService } from "./compartir.service";

@Injectable({
  providedIn: 'root'
})
export class CompartirInventarioModificarService {

  constructor(
    public CompartirService : CompartirService
  ) { }

  modificar : boolean = false

  materialModificado = {
    nombre: '',
    cantidad: 0,
    precio: 0,
    origen: '',
    descripcion: ''
  }

  id = ''

  modificarMaterialLocal(material :any){

    const indice = this.CompartirService.materiales.indexOf(this.id)
    this.CompartirService.materiales.splice(indice, 1)
  }
}
