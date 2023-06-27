import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioMaterialModalComponent } from './inventario-material-modal.component';

describe('InventarioMaterialModalComponent', () => {
  let component: InventarioMaterialModalComponent;
  let fixture: ComponentFixture<InventarioMaterialModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarioMaterialModalComponent]
    });
    fixture = TestBed.createComponent(InventarioMaterialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
