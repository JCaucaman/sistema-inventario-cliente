import { TestBed } from '@angular/core/testing';

import { ComprasCompartirService } from './compras-compartir.service';

describe('ComprasCompartirService', () => {
  let service: ComprasCompartirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprasCompartirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
