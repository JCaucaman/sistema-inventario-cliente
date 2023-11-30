import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasDetalleComponent } from './ventas-detalle.component';

describe('VentasDetalleComponent', () => {
  let component: VentasDetalleComponent;
  let fixture: ComponentFixture<VentasDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasDetalleComponent]
    });
    fixture = TestBed.createComponent(VentasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
