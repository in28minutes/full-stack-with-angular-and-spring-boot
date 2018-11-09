import { TestBed } from '@angular/core/testing';

import { WelcomeDataService } from './welcome-data.service';

describe('WelcomeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomeDataService = TestBed.get(WelcomeDataService);
    expect(service).toBeTruthy();
  });
});
