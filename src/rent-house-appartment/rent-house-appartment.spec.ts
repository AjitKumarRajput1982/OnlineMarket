import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentHouseAppartment } from './rent-house-appartment';

describe('RentHouseAppartment', () => {
  let component: RentHouseAppartment;
  let fixture: ComponentFixture<RentHouseAppartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentHouseAppartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentHouseAppartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
