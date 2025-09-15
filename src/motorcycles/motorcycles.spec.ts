import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motorcycles } from './motorcycles';

describe('Motorcycles', () => {
  let component: Motorcycles;
  let fixture: ComponentFixture<Motorcycles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Motorcycles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Motorcycles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
