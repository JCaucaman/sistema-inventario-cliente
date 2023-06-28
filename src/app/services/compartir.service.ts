import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartirService {

  materiales : any = []

  styleModalMaterial : String = ''
  styleModalEtiqueta : String = ''
  
  constructor() { }

  agregarMaterial(material: any) {
    this.materiales.push(material); 
  }
}
