import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaguinaNoEncontradaComponent } from './paguina-no-encontrada.component';

describe('PaguinaNoEncontradaComponent', () => {
  let component: PaguinaNoEncontradaComponent;
  let fixture: ComponentFixture<PaguinaNoEncontradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaguinaNoEncontradaComponent]
    });
    fixture = TestBed.createComponent(PaguinaNoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
