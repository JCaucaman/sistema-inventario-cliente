import { Component } from '@angular/core';
import { EtiquetaService } from "../../../services/inventario/etiqueta.service";
import { EtiquetaCompartirService } from "../../../services/inventario/etiqueta-compartir.service";

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent {

  constructor(
    private EtiquetaService : EtiquetaService,
    public EtiquetaCompartirService : EtiquetaCompartirService
    ) { }


    ngOnInit(){
      this.mostrarEtiquetas()
    }

    mostrarEtiquetas(){
      this.EtiquetaService.etiquetaMostrar()
      .subscribe(
        res => {
          this.EtiquetaCompartirService.etiquetas = res;
          console.log(res)
        },
        err => console.log(err)
      )
    }

    disappearContext(){

    }
    
    ApareceModalModificarE(){

    }
    
    eliminarEtiqueta(){

    }

}
