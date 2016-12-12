/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Stocksservice2Service } from './stocksservice2.service';

describe('Stocksservice2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Stocksservice2Service]
    });
  });

  it('should ...', inject([Stocksservice2Service], (service: Stocksservice2Service) => {
    expect(service).toBeTruthy();
  }));
});
