import { TestBed } from '@angular/core/testing';

import { PedidosCompartirService } from './pedidos-compartir.service';

describe('PedidosCompartirService', () => {
  let service: PedidosCompartirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosCompartirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
