import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasHomeComponent } from './ventas-home.component';

describe('VentasHomeComponent', () => {
  let component: VentasHomeComponent;
  let fixture: ComponentFixture<VentasHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasHomeComponent]
    });
    fixture = TestBed.createComponent(VentasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
