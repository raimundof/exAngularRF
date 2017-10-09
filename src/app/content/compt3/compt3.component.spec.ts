import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compt3Component } from './compt3.component';

describe('Compt3Component', () => {
  let component: Compt3Component;
  let fixture: ComponentFixture<Compt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
