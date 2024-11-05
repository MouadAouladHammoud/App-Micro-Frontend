import { TestBed } from '@angular/core/testing';

import { Cp1Service } from './cp1.service';

describe('Cp1Service', () => {
  let service: Cp1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cp1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
