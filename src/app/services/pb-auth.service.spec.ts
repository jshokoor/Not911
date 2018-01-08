import { TestBed, inject } from '@angular/core/testing';

import { PbAuthService } from './pb-auth.service';

describe('PbAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PbAuthService]
    });
  });

  it('should be created', inject([PbAuthService], (service: PbAuthService) => {
    expect(service).toBeTruthy();
  }));
});
