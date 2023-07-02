import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartirService {

  materiales : any = []

  desde : any = this.materiales.lenght

  styleModalMaterial : String = ''
  styleModalEtiqueta : String = ''
  
  constructor() { }

  agregarMaterial(material: any) {
    this.materiales.unshift(material); 
  }
}
