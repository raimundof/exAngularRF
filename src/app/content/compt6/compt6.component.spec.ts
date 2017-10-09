import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compt6Component } from './compt6.component';

describe('Compt6Component', () => {
  let component: Compt6Component;
  let fixture: ComponentFixture<Compt6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compt6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compt6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
