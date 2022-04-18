import {Component} from '@angular/core';
import {UserListUsecase} from './user-list/user-list.usecase';
import {DataService} from "./data.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userList: UserListUsecase, private dataService: DataService) {
  }

  setUserListFilter(value: string) {
    this.userList.setNameFilter(value);
  }

  updateValue() {
    const value = new Date().toISOString();
    this.dataService.setValue(value);
  }
}
