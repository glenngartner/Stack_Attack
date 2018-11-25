import { TestBed } from '@angular/core/testing';

import { StackExchangeService } from './stack-exchange.service';

describe('StackExchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StackExchangeService = TestBed.get(StackExchangeService);
    expect(service).toBeTruthy();
  });
});
