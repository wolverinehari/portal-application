import { TestBed, inject } from '@angular/core/testing';

import { ContantdataService } from './contantdata.service';

describe('ContantdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContantdataService]
    });
  });

  it('should be created', inject([ContantdataService], (service: ContantdataService) => {
    expect(service).toBeTruthy();
  }));
});
