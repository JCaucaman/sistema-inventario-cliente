import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasComponent } from './cajas.component';

describe('CajasComponent', () => {
  let component: CajasComponent;
  let fixture: ComponentFixture<CajasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CajasComponent]
    });
    fixture = TestBed.createComponent(CajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
