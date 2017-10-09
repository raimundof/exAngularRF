import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compt7Component } from './compt7.component';

describe('Compt7Component', () => {
  let component: Compt7Component;
  let fixture: ComponentFixture<Compt7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compt7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compt7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
