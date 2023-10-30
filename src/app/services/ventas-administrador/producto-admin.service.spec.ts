import { TestBed } from '@angular/core/testing';

import { ProductoAdminService } from './producto-admin.service';

describe('ProductoAdminService', () => {
  let service: ProductoAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
