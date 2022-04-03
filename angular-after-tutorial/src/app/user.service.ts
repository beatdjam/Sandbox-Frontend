import { HttpClient } from '@angular/common/http';
import {firstValueFrom, map, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {User} from "./user";
import {Store} from "./store.service";

@Injectable({ providedIn: 'root' })
export class UserService {
  get users$(): Observable<User[]> {
    return this.store.select(state => state.userList.users);
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

  constructor(private http: HttpClient, private store: Store) { }
}
