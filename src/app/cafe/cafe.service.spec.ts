import {inject, TestBed} from '@angular/core/testing';

import { CafeService } from './cafe.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Cafe} from "./cafe";

describe('CafeService', () => {
  let service: CafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeService]
    });
  });

  it('should ...', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
