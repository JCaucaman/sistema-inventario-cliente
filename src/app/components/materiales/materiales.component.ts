import { Component, OnInit } from '@angular/core';
import { MaterialService } from "../../services/material.service";
import { CompartirService } from "../../services/compartir.service";

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

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

}