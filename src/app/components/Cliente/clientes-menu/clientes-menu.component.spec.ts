import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesMenuComponent } from './clientes-menu.component';

describe('ClientesMenuComponent', () => {
  let component: ClientesMenuComponent;
  let fixture: ComponentFixture<ClientesMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesMenuComponent]
    });
    fixture = TestBed.createComponent(ClientesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
