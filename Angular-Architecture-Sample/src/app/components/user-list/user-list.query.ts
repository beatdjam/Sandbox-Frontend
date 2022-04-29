import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserListStore, UserListState } from './user-list.store';

@Injectable({ providedIn: 'root' })
export class UserListQuery extends QueryEntity<UserListState> {

  constructor(protected override store: UserListStore) {
    super(store);
  }

}
