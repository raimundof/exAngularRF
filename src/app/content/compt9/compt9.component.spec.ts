import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compt9Component } from './compt9.component';

describe('Compt9Component', () => {
  let component: Compt9Component;
  let fixture: ComponentFixture<Compt9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compt9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compt9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
