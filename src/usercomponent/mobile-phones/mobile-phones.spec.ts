import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhones } from './mobile-phones';

describe('MobilePhones', () => {
  let component: MobilePhones;
  let fixture: ComponentFixture<MobilePhones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobilePhones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilePhones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
