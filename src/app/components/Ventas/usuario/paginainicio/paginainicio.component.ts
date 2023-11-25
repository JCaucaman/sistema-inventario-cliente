import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './paginainicio.component.html',
  styleUrls: ['./paginainicio.component.css']
})
export class PaginaInicioComponent implements OnInit {
  productos: any[] = [];
  error: string | null = null; 

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(
      (data: any) => {
        this.productos = data;
      },
      (error: any) => {
        console.error('Error al obtener productos:', error);
        this.error = 'Error al cargar productos. Por favor, inténtelo de nuevo más tarde.';
      }
    );
  }
}
