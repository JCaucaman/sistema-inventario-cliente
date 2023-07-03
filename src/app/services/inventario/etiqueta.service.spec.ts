import { TestBed } from '@angular/core/testing';

import { EtiquetaService } from './etiqueta.service';

describe('EtiquetaService', () => {
  let service: EtiquetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtiquetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
