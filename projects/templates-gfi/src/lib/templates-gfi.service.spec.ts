import { TestBed } from '@angular/core/testing';

import { TemplatesGfiService } from './templates-gfi.service';

describe('TemplatesGfiService', () => {
  let service: TemplatesGfiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplatesGfiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
