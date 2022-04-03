import { HttpClient } from '@angular/common/http';
import {firstValueFrom, map, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {User} from "./user";
import {Store} from "./store.service";

@Injectable({ providedIn: 'root' })
export class UserListUsecase {
  get users$(): Observable<User[]> {
    return this.store
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
    return this.store.select(state => state.userList.filter);
  }

  async fetchUsers() {
    const users = await firstValueFrom(
      this.http
        .get<{ data: User[] }>('https://reqres.in/api/users')
        .pipe(map(resp => resp.data))
    );

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

  constructor(private http: HttpClient, private store: Store) { }
}
