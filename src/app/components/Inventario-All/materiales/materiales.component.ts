import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MaterialService } from "../../../services/material.service";
import { CompartirService } from "../../../services/compartir.service";
import { CompartirInventarioModificarService } from "src/app/services/compartir-inventario-modificar.service";

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  id: string = ''

  constructor(
    private MaterialService : MaterialService,
    public CompartirService : CompartirService,
    public CompartirInventarioModificarService : CompartirInventarioModificarService
    ) { }

  ngOnInit(){ // se ejecuta al cargar el componente asociado
    this.mostrarMateriales()
  }

  mostrarMateriales(){
    this.MaterialService.materialMostrar()
    .subscribe(
      res => {
        this.CompartirService.materiales = res
      },
      err => console.log(err)
    )
  }

  eliminarMaterial(){
    this.MaterialService.materialEliminar(this.id)
    .subscribe(
      res => {
        const newMateriales = this.CompartirService.materiales.filter(
          (material: any) => material._id !== this.id
        )
        this.CompartirService.materiales = newMateriales
      },
      err => console.log(err)
    )
  }

  ApareceModalModificar(){
    this.CompartirInventarioModificarService.modificar = true
    this.CompartirService.styleModalMaterial = 'visibility: visible;'
    console.log(this.id)

    const modMateriales = this.CompartirService.materiales.filter(
      (material: any) => material._id == this.id
    )
    this.CompartirInventarioModificarService.materialModificado = modMateriales[0]
    this.CompartirInventarioModificarService.id = this.id

  }

  // Mouse

  @ViewChild('menu') menu! :ElementRef

  contextmenu(event: MouseEvent){
    event.preventDefault();

    const target = event.target as HTMLElement;

    this.id = target.id.split('-')[0]

    if(this.id.length == 24){
    this.menu.nativeElement.style.display = "block";
    this.menu.nativeElement.style.top = event.pageY + "px"
    this.menu.nativeElement.style.left = event.pageX + "px"

    console.log(this.id)
    } else {
      this.menu.nativeElement.style.display = "none";
    }
  }

  click(event: MouseEvent){
    this.menu.nativeElement.style.display = "none";
  }

  disappearContext(){
    this.menu.nativeElement.style.display = "none";
  }

}
