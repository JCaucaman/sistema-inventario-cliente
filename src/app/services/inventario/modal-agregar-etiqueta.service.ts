import { Injectable } from '@angular/core';
import { EtiquetaCompartirService } from "./etiqueta-compartir.service";


@Injectable({
  providedIn: 'root'
})
export class ModalAgregarEtiquetaService {

  modal = false;

  id_select_material : string = '';
  
  etiquetas_select_material : any;
  etiquetas_select_material_copy : any;


  constructor(
    public EtiquetaCompartirService : EtiquetaCompartirService,
  ) { }

  encontrarIndicesIguales(array1: any, array2: any){

    for(let index in this.EtiquetaCompartirService.etiquetas){
      this.EtiquetaCompartirService.etiquetas[index].checked = false;
    }

    let indices_iguales : any = [];

    for(let index in array1){

      for(let jndex in array2){


        if(array1[index]._id == array2[jndex]._id){
          indices_iguales.push(Number(index))
        } else {
          // pass
        }

      }

    }

    return indices_iguales
  }

  ckeckEtiquetas(coincidenciasIndices : []){
    coincidenciasIndices.forEach( (index) => {
      this.EtiquetaCompartirService.etiquetas[index].checked = true;
      }
    )
  }
    
  ckeckEtiquetasPreExistentes(){

    let coincidenciasIndices : [] = this.encontrarIndicesIguales(
      this.EtiquetaCompartirService.etiquetas, this.etiquetas_select_material
    )

      this.ckeckEtiquetas(coincidenciasIndices)
  }

}
