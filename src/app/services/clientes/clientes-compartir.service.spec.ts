import { TestBed } from '@angular/core/testing';

import { ClientesCompartirService } from './clientes-compartir.service';

describe('ClientesCompartirService', () => {
  let service: ClientesCompartirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesCompartirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
