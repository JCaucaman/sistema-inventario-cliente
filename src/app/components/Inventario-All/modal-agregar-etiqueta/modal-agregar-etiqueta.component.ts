import { Component } from '@angular/core';
import { EtiquetaCompartirService } from "../../../services/inventario/etiqueta-compartir.service";
import { ModalAgregarEtiquetaService } from '../../../services/inventario/modal-agregar-etiqueta.service'
import { MaterialService } from "../../../services/inventario/material.service";
import { CompartirService } from "../../../services/inventario/compartir.service";

@Component({
  selector: 'app-modal-agregar-etiqueta',
  templateUrl: './modal-agregar-etiqueta.component.html',
  styleUrls: ['./modal-agregar-etiqueta.component.css']
})
export class ModalAgregarEtiquetaComponent {

  constructor(
    public EtiquetaCompartirService : EtiquetaCompartirService,
    public ModalAgregarEtiquetaService : ModalAgregarEtiquetaService,
    public MaterialService : MaterialService,
    public CompartirService : CompartirService,
  ){}

  agregarEtiqueta(){

    // TODO: determinar cuales etiquetas estan checked ✅
    // TODO: compararlas con las que tenemos guadadas
    // TODO: determinar cuales no estan en la interseccion
    // TODO: post de las etiquetas junto a el id del material (sin campo Checked)

    let listaEtiquetas_checkednew : any[] = []
    let listaEtiquetas_onlynames = []

    // determinar las etiquetas checked
    for(let index in this.EtiquetaCompartirService.etiquetas){

      if (this.EtiquetaCompartirService.etiquetas[index].checked == true) {
        listaEtiquetas_checkednew.push(this.EtiquetaCompartirService.etiquetas[index])

      } else {
        //pass
      }

    }

    for(let index in listaEtiquetas_checkednew){
      listaEtiquetas_onlynames.push(listaEtiquetas_checkednew[index].name)
    }

    console.log(listaEtiquetas_onlynames)

    this.MaterialService.materialAgregarEtiqueta(
      this.ModalAgregarEtiquetaService.id_select_material, 
      listaEtiquetas_onlynames
      ).subscribe(
      res => {
        const newEtiquetas = this.CompartirService.materiales.filter(
          (material: any) => material._id == this.ModalAgregarEtiquetaService.id_select_material
        )

        const newmateriales = this.CompartirService.materiales.filter(
          (material: any) => material._id !== this.ModalAgregarEtiquetaService.id_select_material
        )

        newEtiquetas[0].Etiquetas  = listaEtiquetas_checkednew

        newmateriales.unshift(newEtiquetas[0])

        console.log(newmateriales)

        this.CompartirService.materiales = newmateriales

        console.log(newEtiquetas)
        console.log(newmateriales)
      },
      err => console.log(err)
    )
  }

  exit(){
    this.agregarEtiqueta()
    this.ModalAgregarEtiquetaService.modal = false
  }
  
}
