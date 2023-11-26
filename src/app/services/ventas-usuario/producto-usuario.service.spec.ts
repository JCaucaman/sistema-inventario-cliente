import { TestBed } from '@angular/core/testing';

import { ProductoUsuarioService } from './producto-usuario.service';

describe('ProductoUsuarioService', () => {
  let service: ProductoUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
