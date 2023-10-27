import { Component, ViewChild, ElementRef} from '@angular/core';
import { MaterialService } from "../../../services/inventario/material.service";
import { CompartirService } from "../../../services/inventario/compartir.service";
import { CompartirInventarioModificarService } from "src/app/services/inventario/compartir-inventario-modificar.service";
import { ModalAgregarEtiquetaService } from "src/app/services/inventario/modal-agregar-etiqueta.service";

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent{

  idM: string = ''

  clicksM = 1

  scrollAtBottom: boolean = false;

  constructor(
    private MaterialService : MaterialService,
    public CompartirService : CompartirService,
    public CompartirInventarioModificarService : CompartirInventarioModificarService,

    public ModalAgregarEtiquetaService : ModalAgregarEtiquetaService
    ) { }

  ngOnInit(){ 
    this.mostrarMateriales()
  }

  mostrarMateriales(){
    this.MaterialService.materialMostrar()
    .subscribe(
      res => {
        this.CompartirService.materiales = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  eliminarMaterial(){
    this.MaterialService.materialEliminar(this.idM)
    .subscribe(
      res => {
        const newMateriales = this.CompartirService.materiales.filter(
          (material: any) => material._id !== this.idM
        )
        this.CompartirService.materiales = newMateriales
      },
      err => console.log(err)
    )
    this.clicksM = 0
  }

  ApareceModalModificarM(){
    this.CompartirInventarioModificarService.modificar = true
    this.CompartirService.modalMaterial = true
    console.log(this.idM)

    const modMateriales = this.CompartirService.materiales.filter(
      (material: any) => material._id == this.idM
    )
    this.CompartirInventarioModificarService.materialModificado = { ...modMateriales[0]}
    this.CompartirInventarioModificarService.copy_materialModificado = { ...modMateriales[0]}
    this.CompartirInventarioModificarService.id = this.idM
    this.clicksM = 0
  }

  agregarEtiqueta(){
//    this.MaterialService.materialAgregarEtiqueta
  }

  openAgregarEtiqueta(){
    this.ModalAgregarEtiquetaService.modal = true
  }

  @ViewChild('menuM') menuM! :ElementRef

  contextmenuM(event: MouseEvent){
    event.preventDefault();

    const target = event.target as HTMLElement;
    this.idM = target.id.split('-')[0]

    if(this.idM.length == 24){
    this.menuM.nativeElement.style.display = "block";
    this.menuM.nativeElement.style.top = event.pageY + "px"
    this.menuM.nativeElement.style.left = event.pageX + "px"

    this.clicksM = 0
    } else {
      this.menuM.nativeElement.style.display = "none";
    }
  }

  clickM(event: MouseEvent){
    this.clicksM ++
    if(this.clicksM == 3){
      this.contextmenuM(event)
      this.clicksM = 0
    } else {
      this.menuM.nativeElement.style.display = "none";
    }
  }

  disappearContextM(){
    this.menuM.nativeElement.style.display = "none";
    this.clicksM = 0
  }
  

}