import { TestBed } from '@angular/core/testing';

import { PaisApiService } from './pais-api.service';

describe('PaisApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaisApiService = TestBed.get(PaisApiService);
    expect(service).toBeTruthy();
  });
});
