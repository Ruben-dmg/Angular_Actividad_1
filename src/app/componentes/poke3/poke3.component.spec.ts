import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poke3Component } from './poke3.component';

describe('Poke3Component', () => {
  let component: Poke3Component;
  let fixture: ComponentFixture<Poke3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Poke3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poke3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
