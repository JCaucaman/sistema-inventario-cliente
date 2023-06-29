import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MaterialService } from "../../../services/material.service";
import { CompartirService } from "../../../services/compartir.service";

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

  // Mouse

  @ViewChild('menu') menu! :ElementRef

  contextmenu(event: MouseEvent){
    event.preventDefault();

    this.menu.nativeElement.style.display = "block";
    this.menu.nativeElement.style.top = event.pageY + "px"
    this.menu.nativeElement.style.left = event.pageX + "px"

    const target = event.target as HTMLElement;

    this.id = target.id.split('-')[0]

    console.log(this.id)

  }

  click(event: MouseEvent){
    this.menu.nativeElement.style.display = "none";
  }

  disappearContext(){
    this.menu.nativeElement.style.display = "none";
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

}
