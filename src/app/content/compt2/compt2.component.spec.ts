import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compt2Component } from './compt2.component';

describe('Compt2Component', () => {
  let component: Compt2Component;
  let fixture: ComponentFixture<Compt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
