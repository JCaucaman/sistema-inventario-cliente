import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarEtiquetaComponent } from './modal-agregar-etiqueta.component';

describe('ModalAgregarEtiquetaComponent', () => {
  let component: ModalAgregarEtiquetaComponent;
  let fixture: ComponentFixture<ModalAgregarEtiquetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAgregarEtiquetaComponent]
    });
    fixture = TestBed.createComponent(ModalAgregarEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
