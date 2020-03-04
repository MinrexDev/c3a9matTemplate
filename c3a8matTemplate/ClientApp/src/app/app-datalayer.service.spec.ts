import { TestBed } from '@angular/core/testing';

import { AppDatalayerService } from './app-datalayer.service';

describe('AppDatalayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppDatalayerService = TestBed.get(AppDatalayerService);
    expect(service).toBeTruthy();
  });
});
