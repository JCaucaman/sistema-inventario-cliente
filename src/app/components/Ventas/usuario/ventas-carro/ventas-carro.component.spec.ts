import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasCarroComponent } from './ventas-carro.component';

describe('VentasCarroComponent', () => {
  let component: VentasCarroComponent;
  let fixture: ComponentFixture<VentasCarroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasCarroComponent]
    });
    fixture = TestBed.createComponent(VentasCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
