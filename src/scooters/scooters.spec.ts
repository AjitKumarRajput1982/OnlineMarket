import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scooters } from './scooters';

describe('Scooters', () => {
  let component: Scooters;
  let fixture: ComponentFixture<Scooters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Scooters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scooters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
