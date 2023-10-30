import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasMenuComponent } from './ventas-menu.component';

describe('VentasMenuComponent', () => {
  let component: VentasMenuComponent;
  let fixture: ComponentFixture<VentasMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasMenuComponent]
    });
    fixture = TestBed.createComponent(VentasMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
