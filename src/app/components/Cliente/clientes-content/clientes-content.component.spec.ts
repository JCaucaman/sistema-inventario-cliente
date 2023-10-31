import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesContentComponent } from './clientes-content.component';

describe('ClientesContentComponent', () => {
  let component: ClientesContentComponent;
  let fixture: ComponentFixture<ClientesContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesContentComponent]
    });
    fixture = TestBed.createComponent(ClientesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
