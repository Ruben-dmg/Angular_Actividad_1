import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pok2Component } from './pok2.component';

describe('Pok2Component', () => {
  let component: Pok2Component;
  let fixture: ComponentFixture<Pok2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pok2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pok2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
