import { TestBed } from '@angular/core/testing';

import { EtiquetaModificarService } from './etiqueta-modificar.service';

describe('EtiquetaModificarService', () => {
  let service: EtiquetaModificarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtiquetaModificarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
