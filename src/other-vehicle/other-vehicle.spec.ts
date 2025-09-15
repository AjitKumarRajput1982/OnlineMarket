import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherVehicle } from './other-vehicle';

describe('OtherVehicle', () => {
  let component: OtherVehicle;
  let fixture: ComponentFixture<OtherVehicle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherVehicle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherVehicle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
