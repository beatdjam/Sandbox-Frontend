import {Injectable} from "@angular/core";
import {UserApiService} from "../api/user-api.service";
import {UserDetailPageStore} from "./user-detail-page.store";
import {UserDetailPageQuery} from "./user-detail-page.query";

@Injectable({providedIn: 'root'})
export class UserDetailUsecase {
  readonly user$ = this.query.select(state => state.user);

  constructor(private userApi: UserApiService, private store: UserDetailPageStore, private query: UserDetailPageQuery) {
  }

  async fetchUser(userId: string) {
    const user = await this.userApi.getUserById(userId);
    this.store.update({user: user});
  }
}
