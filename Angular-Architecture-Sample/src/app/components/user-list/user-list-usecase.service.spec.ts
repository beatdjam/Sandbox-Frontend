import { TestBed } from '@angular/core/testing';

import { UserListUsecaseService } from './user-list-usecase.service';

describe('UsersUsecaseService', () => {
  let service: UserListUsecaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListUsecaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
