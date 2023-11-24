import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosMaterialesModalComponent } from './pedidos-materiales-modal.component';

describe('PedidosMaterialesModalComponent', () => {
  let component: PedidosMaterialesModalComponent;
  let fixture: ComponentFixture<PedidosMaterialesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosMaterialesModalComponent]
    });
    fixture = TestBed.createComponent(PedidosMaterialesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
