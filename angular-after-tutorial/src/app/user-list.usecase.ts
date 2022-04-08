import {map, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {User} from "./user";
import {AkitaQuery, AkitaStore} from "./store.service";
import {UserApiService} from "./user-api.service";

@Injectable({ providedIn: 'root' })
export class UserListUsecase {
  get users$(): Observable<User[]> {
    return this.query
      .select(state => state.userList)
      .pipe(
        map(({items, filter}) =>
          items.filter(user =>
            (user.first_name + user.last_name).includes(filter.nameFilter)
          )
        )
      );
  }

  get filter$() {
    return this.query.select(state => state.userList.filter);
  }

  async fetchUsers() {
    const users = await this.userApi.getAllUsers();

    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        items: users
      }
    }));
  }

  setNameFilter(nameFilter: string) {
    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        filter: {
          ...state.userList.filter,
          nameFilter
        }
      }
    }));
  }

  constructor(private userApi: UserApiService, private store: AkitaStore, private query: AkitaQuery) { }
}
