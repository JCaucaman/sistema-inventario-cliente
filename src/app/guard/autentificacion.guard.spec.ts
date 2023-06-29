import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { AutenticacionGuard } from './autentificacion.guard';

describe('AutentificacionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => AutenticacionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
