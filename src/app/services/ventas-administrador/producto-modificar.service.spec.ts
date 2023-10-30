import { TestBed } from '@angular/core/testing';

import { ProductoModificarService } from './producto-modificar.service';

describe('ProductoModificarService', () => {
  let service: ProductoModificarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoModificarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
