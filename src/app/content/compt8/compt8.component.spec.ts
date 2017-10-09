import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compt8Component } from './compt8.component';

describe('Compt8Component', () => {
  let component: Compt8Component;
  let fixture: ComponentFixture<Compt8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compt8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compt8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
