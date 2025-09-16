import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleHouseAppartment } from './sale-house-appartment';

describe('SaleHouseAppartment', () => {
  let component: SaleHouseAppartment;
  let fixture: ComponentFixture<SaleHouseAppartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaleHouseAppartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleHouseAppartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
