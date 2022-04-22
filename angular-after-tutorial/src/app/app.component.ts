import {Component} from '@angular/core';
import {UserListUsecase} from './user-list/user-list.usecase';
import {DataService} from "./data.service";
import {map, pipe, Subject} from "rxjs";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private obs = new Subject<number>();

  constructor(private userList: UserListUsecase, private dataService: DataService) {
    this.obs.pipe(this.multiplyNumber(5))
      .subscribe(value => console.log(value));

    this.obs.next(10);
    this.obs.next(5);
  }

  setUserListFilter(value: string) {
    this.userList.setNameFilter(value);
  }

  updateValue() {
    const value = new Date().toISOString();
    this.dataService.setValue(value);
  }

  multiplyNumber(N: number) {
    return pipe(map((value: number) => value * N))
  }
}
