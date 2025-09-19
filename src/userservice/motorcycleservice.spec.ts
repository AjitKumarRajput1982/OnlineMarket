import { TestBed } from '@angular/core/testing';

import { Motorcycleservice } from './motorcycleservice';

describe('Motorcycleservice', () => {
  let service: Motorcycleservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Motorcycleservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
