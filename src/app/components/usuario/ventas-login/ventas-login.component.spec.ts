import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasLoginComponent } from './ventas-login.component';

describe('VentasLoginComponent', () => {
  let component: VentasLoginComponent;
  let fixture: ComponentFixture<VentasLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasLoginComponent]
    });
    fixture = TestBed.createComponent(VentasLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
