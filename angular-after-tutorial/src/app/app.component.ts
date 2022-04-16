import {Component} from '@angular/core';
import {UserListUsecase} from './user-list/user-list.usecase';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userList: UserListUsecase) {
  }

  setUserListFilter(value: string) {
    this.userList.setNameFilter(value);
  }
}
