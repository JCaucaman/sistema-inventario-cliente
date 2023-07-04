import { Component, ViewChild, ElementRef} from '@angular/core';
import { EtiquetaService } from "../../../services/inventario/etiqueta.service";
import { EtiquetaCompartirService } from "../../../services/inventario/etiqueta-compartir.service";
import { EtiquetaModificarService } from "../../../services/inventario/etiqueta-modificar.service";
@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent {

  id: string = ''

  clicks = 1

  constructor(
    private EtiquetaService : EtiquetaService,
    public EtiquetaCompartirService : EtiquetaCompartirService,
    public EtiquetaModificarService: EtiquetaModificarService
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

    eliminarEtiqueta(){
      this.EtiquetaService.etiquetaEliminar(this.id)  
      .subscribe(
        res => {
          const newMateriales = this.EtiquetaCompartirService.etiquetas.filter(
            (material: any) => material._id !== this.id
          )
          this.EtiquetaCompartirService.etiquetas = newMateriales
        },
        err => console.log(err)
      )
    this.clicks = 0
  }

    ApareceModalModificarE(){
      this.EtiquetaModificarService.modificar = true
      this.EtiquetaCompartirService.modalEtiqueta = true
      console.log(this.id)
  
      const modMateriales = this.EtiquetaCompartirService.etiquetas.filter(
        (etiqueta: any) => etiqueta._id == this.id
      )
      this.EtiquetaModificarService.etiquetaModificado = { ...modMateriales[0]}
      this.EtiquetaModificarService.copy_etiquetaModificado = { ...modMateriales[0]}
      this.EtiquetaModificarService.id = this.id
      this.clicks = 0
    }
    
  // Mouse

  @ViewChild('menu') menu! :ElementRef

  contextmenu(event: MouseEvent){
    event.preventDefault();

    const target = event.target as HTMLElement;
    this.id = target.id.split('-')[0]
    console.log(this.id)

    if(this.id.length == 24){
    this.menu.nativeElement.style.display = "block";
    this.menu.nativeElement.style.top = event.pageY + "px"
    this.menu.nativeElement.style.left = event.pageX + "px"

    this.clicks = 0
    } else {
      this.menu.nativeElement.style.display = "none";
    }
  }

  click(event: MouseEvent){
    this.clicks ++
    if(this.clicks == 3){
      this.contextmenu(event)
      this.clicks = 0
    } else {
      this.menu.nativeElement.style.display = "none";
    }
  }

  disappearContext(){
    this.menu.nativeElement.style.display = "none";
    this.clicks = 0
  }

}
