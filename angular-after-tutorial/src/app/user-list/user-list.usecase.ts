import {map, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {User} from "../model/user";
import {UserApiService} from "../api/user-api.service";
import {UserListStore} from "./user-list.store";
import {UserListQuery} from "./user-list.query";

@Injectable({providedIn: 'root'})
export class UserListUsecase {
  get users$(): Observable<User[]> {
    return this.query
      .select(state => state)
      .pipe(
        map(state =>
          state.items.filter(user =>
            (user.first_name + user.last_name).includes(state.filter.nameFilter)
          )
        )
      );
  }

  async fetchUsers() {
    const users = await this.userApi.getAllUsers();

    this.store.update(state => ({
      ...state,
      items: users
    }));
  }

  // TODO: これの責務が曖昧。rootのcomponent経由するならStoreにしたほうがスジがよさそう
  setNameFilter(nameFilter: string) {
    this.store.update(state => ({
      ...state,
      filter: {
        nameFilter
      }
    }));
  }

  constructor(private userApi: UserApiService, private store: UserListStore, private query: UserListQuery) {
  }
}
