import { ComponentFixture, TestBed } from '@angular/core/testing';

import { clientesComponent } from './clientes.component';

describe('ClientesComponent', () => {
  let component: clientesComponent;
  let fixture: ComponentFixture<clientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [clientesComponent]
    });
    fixture = TestBed.createComponent(clientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});