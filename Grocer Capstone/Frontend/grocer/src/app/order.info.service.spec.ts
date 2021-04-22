import { TestBed } from '@angular/core/testing';

import { Order.InfoService } from './order.info.service';

describe('Order.InfoService', () => {
  let service: Order.InfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Order.InfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
