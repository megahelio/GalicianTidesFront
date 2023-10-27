import { TestBed } from '@angular/core/testing';

import { TidesService } from './tides.service';

describe('TidesService', () => {
  let service: TidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
