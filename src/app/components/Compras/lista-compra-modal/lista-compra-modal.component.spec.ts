import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompraModalComponent } from './lista-compra-modal.component';

describe('ListaCompraModalComponent', () => {
  let component: ListaCompraModalComponent;
  let fixture: ComponentFixture<ListaCompraModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCompraModalComponent]
    });
    fixture = TestBed.createComponent(ListaCompraModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
