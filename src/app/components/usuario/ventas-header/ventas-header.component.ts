import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ventas-header',
  templateUrl: './ventas-header.component.html',
  styleUrls: ['./ventas-header.component.css']
})
export class VentasHeaderComponent {

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
