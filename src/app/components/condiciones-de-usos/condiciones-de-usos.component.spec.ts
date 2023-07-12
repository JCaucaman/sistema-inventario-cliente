import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesDeUsosComponent } from './condiciones-de-usos.component';

describe('CondicionesDeUsosComponent', () => {
  let component: CondicionesDeUsosComponent;
  let fixture: ComponentFixture<CondicionesDeUsosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondicionesDeUsosComponent]
    });
    fixture = TestBed.createComponent(CondicionesDeUsosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
