import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesModalComponent } from './clientes-modal.component';

describe('ClientesModalComponent', () => {
  let component: ClientesModalComponent;
  let fixture: ComponentFixture<ClientesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesModalComponent]
    });
    fixture = TestBed.createComponent(ClientesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
