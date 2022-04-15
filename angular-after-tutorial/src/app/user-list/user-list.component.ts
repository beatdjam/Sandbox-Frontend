import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserListUsecase} from "./user-list.usecase";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  users$ = this.userList.users$;

  constructor(private userList: UserListUsecase) {}
  ngOnInit() {
    this.userList.fetchUsers().then();
  }
}
