import { Component } from '@angular/core';
import { MaterialService } from "../../services/material.service";

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  constructor(
    private MaterialService : MaterialService
  ){}

}
