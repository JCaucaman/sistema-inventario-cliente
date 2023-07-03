import { TestBed } from '@angular/core/testing';

import { EtiquetaCompartirService } from './etiqueta-compartir.service';

describe('EtiquetaCompartirService', () => {
  let service: EtiquetaCompartirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtiquetaCompartirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
