import { Component, OnInit } from '@angular/core';
import { MaterialService } from "../../services/material.service";

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  materiales : any = [] // guarda los materiales despues de que son obtenidos

  constructor(
    private MaterialService : MaterialService
  ){}

  ngOnInit(){ // se ejecuta al cargar el componente asociado
    this.mostrarMateriales()
  }

  mostrarMateriales(){
    this.MaterialService.materialMostrar()
    .subscribe(
      res => {

        this.materiales = res;

      },
      err => console.log(err)
    )
  }

}
