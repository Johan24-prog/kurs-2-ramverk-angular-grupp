import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightRail } from './right-rail';

describe('RightRail', () => {
  let component: RightRail;
  let fixture: ComponentFixture<RightRail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightRail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightRail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
