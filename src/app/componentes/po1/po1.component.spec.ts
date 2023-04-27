import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Po1Component } from './po1.component';

describe('Po1Component', () => {
  let component: Po1Component;
  let fixture: ComponentFixture<Po1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Po1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Po1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
