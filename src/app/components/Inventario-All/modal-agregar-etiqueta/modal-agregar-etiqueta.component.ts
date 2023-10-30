import { Component, ViewChild, ElementRef} from '@angular/core';
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

  idEtiqueta: string = ''

  constructor(
    public EtiquetaCompartirService : EtiquetaCompartirService,
    public ModalAgregarEtiquetaService : ModalAgregarEtiquetaService,
    public MaterialService : MaterialService,
    public CompartirService : CompartirService,
  ){}

  agregarEtiqueta(){

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

        this.CompartirService.materiales = newmateriales

      },
      err => console.log(err)
    )
  }

  exit(){
    this.agregarEtiqueta()
    this.ModalAgregarEtiquetaService.modal = false
  }

  clickChecked(event: MouseEvent){

    //TO DO: Ckecked en toda la etiqueta no solo en check

   // event.preventDefault();

    //const target = event.target as HTMLElement;

    //console.log(target.id)


    //this.EtiquetaCompartirService.etiquetas[target.id].checked == true
    
     
    
  }


}
