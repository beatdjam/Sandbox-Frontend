import {Injectable} from "@angular/core";
import {UserDetailPageQuery} from "./user-detail-page.query";
import {map, Observable} from "rxjs";
import {UserDetailViewModel} from "./user-detail-page.view.model";

@Injectable({providedIn: 'root'})
export class UserDetailPageViewQuery {
  constructor(private query: UserDetailPageQuery) {
  }

  fetch(): Observable<UserDetailViewModel> {
    return this.query.select(state => state.user)
      .pipe(
        map(user => UserDetailViewModel.from(user))
      );
  }
}
