import {User} from "../model/user";
import {Store, StoreConfig} from "@datorama/akita";
import {Injectable} from "@angular/core";

export interface UserListFilterState {
  nameFilter: string;
}

export interface UserListState {
  items: User[];
  filter: UserListFilterState;
}


export function createInitialUserListState(): UserListState {
  return {
    items: [],
    filter: {
      nameFilter: ''
    }
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'state'})
export class UserListStore extends Store<UserListState> {
  constructor() {
    super(createInitialUserListState());
  }
}
