import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasInicioComponent } from './ventas-inicio.component';

describe('VentasInicioComponent', () => {
  let component: VentasInicioComponent;
  let fixture: ComponentFixture<VentasInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasInicioComponent]
    });
    fixture = TestBed.createComponent(VentasInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
