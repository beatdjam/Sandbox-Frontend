import {Injectable} from "@angular/core";
import {Query} from "@datorama/akita";
import {UserDetailPageStore, UserDetailState} from "./user-detail-page.store";

@Injectable({providedIn: 'root'})
export class UserDetailPageQuery extends Query<UserDetailState> {
  constructor(protected override store: UserDetailPageStore) {
    super(store);
  }
}
