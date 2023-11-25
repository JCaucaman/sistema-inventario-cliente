import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginainicioComponent } from './paginainicio.component';

describe('PaginainicioComponent', () => {
  let component: PaginainicioComponent;
  let fixture: ComponentFixture<PaginainicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginainicioComponent]
    });
    fixture = TestBed.createComponent(PaginainicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
