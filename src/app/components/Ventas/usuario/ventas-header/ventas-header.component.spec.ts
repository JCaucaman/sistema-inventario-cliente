import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasHeaderComponent } from './ventas-header.component';

describe('VentasHeaderComponent', () => {
  let component: VentasHeaderComponent;
  let fixture: ComponentFixture<VentasHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasHeaderComponent]
    });
    fixture = TestBed.createComponent(VentasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
