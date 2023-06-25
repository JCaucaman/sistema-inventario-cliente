import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeComprasComponent } from './lista-de-compras.component';

describe('ListaDeComprasComponent', () => {
  let component: ListaDeComprasComponent;
  let fixture: ComponentFixture<ListaDeComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeComprasComponent]
    });
    fixture = TestBed.createComponent(ListaDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
