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


  copy_materialModificado : any

  id = ''

  materialModificado = {
    _id: this.id,
    nombre: '',
    cantidad: 0,
    precio: 0,
    origen: '',
    descripcion: ''
  }

  modificarMaterialLocal(){

    const dato = this.CompartirService.materiales.find(
      (dato : any) => dato._id == this.id
    )

    const indice =  this.CompartirService.materiales.indexOf(dato)
    console.log(indice)
    console.log(this.CompartirService.materiales.splice(indice, 1, this.materialModificado))
  }

}
