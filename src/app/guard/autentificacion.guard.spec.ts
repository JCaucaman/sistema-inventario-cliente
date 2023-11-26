import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { AutenticacionGuard } from './autentificacion.guard';

describe('AutentificacionGuard', () => {
  const executeGuard: CanActivateFn = (... guardParameters : any) => 
      TestBed.runInInjectionContext(() => AutenticacionGuard(guardParameters : any));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
