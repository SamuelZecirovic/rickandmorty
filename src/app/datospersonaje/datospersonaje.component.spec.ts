import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatospersonajeComponent } from './datospersonaje.component';

describe('DatospersonajeComponent', () => {
  let component: DatospersonajeComponent;
  let fixture: ComponentFixture<DatospersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatospersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatospersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
