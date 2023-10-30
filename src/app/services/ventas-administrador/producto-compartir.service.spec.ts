import { TestBed } from '@angular/core/testing';

import { ProductoCompartirService } from './producto-compartir.service';

describe('ProductoCompartirService', () => {
  let service: ProductoCompartirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoCompartirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
