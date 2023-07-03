import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartirService {

  materiales : any = []

  modalMaterial : boolean = false
  
  constructor() { }

  agregarMaterial(material: any) {
    this.materiales.unshift(material); 
  }
}
