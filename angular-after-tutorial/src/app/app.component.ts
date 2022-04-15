import {Component, OnInit} from '@angular/core';
import { UserListUsecase } from './user-list/user-list.usecase';
import {UserListFilterState} from "./user-list/user-list.store";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // TODO : UserList配下で取得するようにする
  users$ = this.userList.users$;
  // TODO : UI Stateとして別のStoreを作成し、UserListのViewQueryでごにょる
  userListFilter$ = this.userList.filter$;

  constructor(private userList: UserListUsecase) {}

  ngOnInit() {
    this.userList.fetchUsers().then();
  }

  setUserListFilter(value: UserListFilterState) {
    this.userList.setNameFilter(value.nameFilter);
  }
}
