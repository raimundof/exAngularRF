import { TestBed, inject } from '@angular/core/testing';

import { ServimapService } from './servimap.service';

describe('ServimapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServimapService]
    });
  });

  it('should be created', inject([ServimapService], (service: ServimapService) => {
    expect(service).toBeTruthy();
  }));
});
