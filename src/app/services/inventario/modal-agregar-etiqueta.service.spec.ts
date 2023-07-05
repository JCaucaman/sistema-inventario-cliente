import { TestBed } from '@angular/core/testing';

import { ModalAgregarEtiquetaService } from './modal-agregar-etiqueta.service';

describe('ModalAgregarEtiquetaService', () => {
  let service: ModalAgregarEtiquetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAgregarEtiquetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
