import { TestBed, inject } from '@angular/core/testing';

import { StripsService } from './strips.service';

describe('StripsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StripsService]
    });
  });

  it('should be created', inject([StripsService], (service: StripsService) => {
    expect(service).toBeTruthy();
  }));
});
