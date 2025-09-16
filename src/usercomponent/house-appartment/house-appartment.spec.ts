import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseAppartment } from './house-appartment';

describe('HouseAppartment', () => {
  let component: HouseAppartment;
  let fixture: ComponentFixture<HouseAppartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseAppartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseAppartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
