import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compt4Component } from './compt4.component';

describe('Compt4Component', () => {
  let component: Compt4Component;
  let fixture: ComponentFixture<Compt4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compt4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
