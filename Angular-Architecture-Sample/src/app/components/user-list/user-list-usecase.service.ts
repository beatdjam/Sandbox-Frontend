import { Injectable } from '@angular/core';
import {UsersService} from "../../repository/users.service";
import {UserListItem, UserListStore} from "./user-list.store";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserListUsecaseService {
  constructor(private service: UsersService, private store: UserListStore) { }

  fetchUsers() {
    this.store.setLoading(true);
    this.service.getAllUsers().pipe(
      tap(res => {
          const users = res.map(user => {
            return new UserListItem(user.id, user.first_name,user.last_name);
          });
        this.store.add(users);
      })
    ).subscribe(() => this.store.setLoading(false));
  }
}
