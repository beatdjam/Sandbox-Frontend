import {Injectable} from "@angular/core";
import {Query} from "@datorama/akita";
import {UserListState, UserListStore} from "./user-list.store";

@Injectable({providedIn: 'root'})
export class UserListQuery extends Query<UserListState> {
  constructor(protected override store: UserListStore) {
    super(store);
  }
}
