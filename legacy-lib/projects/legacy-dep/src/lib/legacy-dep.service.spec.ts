import { TestBed } from '@angular/core/testing';

import { LegacyDepService } from './legacy-dep.service';

describe('LegacyDepService', () => {
  let service: LegacyDepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegacyDepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
