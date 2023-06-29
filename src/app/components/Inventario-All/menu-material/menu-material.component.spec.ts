import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMaterialComponent } from './menu-material.component';

describe('MenuMaterialComponent', () => {
  let component: MenuMaterialComponent;
  let fixture: ComponentFixture<MenuMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuMaterialComponent]
    });
    fixture = TestBed.createComponent(MenuMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
