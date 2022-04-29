import { Component, OnInit } from '@angular/core';
import {UserListUsecaseService} from "./user-list-usecase.service";
import {UserListQuery} from "./user-list.query";
import {map, Observable} from "rxjs";
import {combineQueries} from "@datorama/akita";
import {UserListItem} from "./user-list.store";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  readonly state$: Observable<UserStateViewModel>;
  constructor(private usecase: UserListUsecaseService, private query: UserListQuery) {
    this.state$ = combineQueries([this.query.selectAll()]).pipe(
      map(([users]) => new UserStateViewModel(users))
    );
  }

  ngOnInit(): void {
    this.usecase.fetchUsers();
  }
}


class UserStateViewModel {
  constructor(public users: UserListItem[]) {
  }
}
