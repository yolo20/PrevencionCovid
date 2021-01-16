import { TestBed } from '@angular/core/testing';

import { PruebasCovidService } from './pruebas-covid.service';

describe('PruebasCovidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PruebasCovidService = TestBed.get(PruebasCovidService);
    expect(service).toBeTruthy();
  });
});
