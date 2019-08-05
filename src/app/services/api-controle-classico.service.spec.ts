import { TestBed } from '@angular/core/testing';

import { ApiControleClassicoService } from './api-controle-classico.service';

describe('ApiControleClassicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiControleClassicoService = TestBed.get(ApiControleClassicoService);
    expect(service).toBeTruthy();
  });
});
