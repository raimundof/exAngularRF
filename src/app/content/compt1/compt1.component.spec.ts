import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compt1Component } from './compt1.component';

describe('Compt1Component', () => {
  let component: Compt1Component;
  let fixture: ComponentFixture<Compt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
