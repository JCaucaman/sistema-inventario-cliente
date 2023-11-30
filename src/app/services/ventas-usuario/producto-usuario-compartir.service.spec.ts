import { TestBed } from '@angular/core/testing';

import { ProductoUsuarioCompartirService } from './producto-usuario-compartir.service';

describe('ProductoUsuarioCompartirService', () => {
  let service: ProductoUsuarioCompartirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoUsuarioCompartirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
