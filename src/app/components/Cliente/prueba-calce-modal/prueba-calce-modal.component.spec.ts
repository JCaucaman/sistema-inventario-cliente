import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaCalceModalComponent } from './prueba-calce-modal.component';

describe('PruebaCalceModalComponent', () => {
  let component: PruebaCalceModalComponent;
  let fixture: ComponentFixture<PruebaCalceModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaCalceModalComponent]
    });
    fixture = TestBed.createComponent(PruebaCalceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
