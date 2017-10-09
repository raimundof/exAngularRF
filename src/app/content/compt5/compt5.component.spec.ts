import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compt5Component } from './compt5.component';

describe('Compt5Component', () => {
  let component: Compt5Component;
  let fixture: ComponentFixture<Compt5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compt5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compt5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
