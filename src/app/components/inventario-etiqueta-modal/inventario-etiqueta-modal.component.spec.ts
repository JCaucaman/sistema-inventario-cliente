import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioEtiquetaModalComponent } from './inventario-etiqueta-modal.component';

describe('InventarioEtiquetaModalComponent', () => {
  let component: InventarioEtiquetaModalComponent;
  let fixture: ComponentFixture<InventarioEtiquetaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarioEtiquetaModalComponent]
    });
    fixture = TestBed.createComponent(InventarioEtiquetaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
