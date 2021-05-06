import { TestBed } from '@angular/core/testing';

import { LoggedCanActivateService } from './logged-can-activate.service';

describe('LoggedCanActivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggedCanActivateService = TestBed.get(LoggedCanActivateService);
    expect(service).toBeTruthy();
  });
});
