import { TestBed, inject } from '@angular/core/testing';

import { StripService } from './strip.service';

describe('StripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StripService]
    });
  });

  it('should be created', inject([StripService], (service: StripService) => {
    expect(service).toBeTruthy();
  }));
});
