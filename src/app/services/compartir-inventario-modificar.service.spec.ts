import { TestBed } from '@angular/core/testing';

import { CompartirInventarioModificarService } from './compartir-inventario-modificar.service';

describe('CompartirInventarioModificarService', () => {
  let service: CompartirInventarioModificarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompartirInventarioModificarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
