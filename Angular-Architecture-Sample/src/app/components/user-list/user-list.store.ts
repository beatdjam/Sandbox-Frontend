import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export class UserListItem {
  constructor(
    public id: string,
    public first_name: string,
    public last_name: string
  ) {}
}

export interface UserListState extends EntityState<UserListItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'UserList',
  idKey: 'id'
})
export class UserListStore extends EntityStore<UserListState> {
  constructor() {
    super();
  }
}
