import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasProductosModalComponent } from './ventas-productos-modal.component';

describe('VentasProductosModalComponent', () => {
  let component: VentasProductosModalComponent;
  let fixture: ComponentFixture<VentasProductosModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasProductosModalComponent]
    });
    fixture = TestBed.createComponent(VentasProductosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
