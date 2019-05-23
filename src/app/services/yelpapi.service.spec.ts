import { TestBed } from '@angular/core/testing';

import { YelpapiService } from './yelpapi.service';

describe('YelpapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YelpapiService = TestBed.get(YelpapiService);
    expect(service).toBeTruthy();
  });
});
