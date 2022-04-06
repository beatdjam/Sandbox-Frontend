import {Injectable} from "@angular/core";
import {UserApiService} from "./user-api.service";
import {Store} from "./store.service";

@Injectable({providedIn: 'root'})
export class UserDetailUsecase {
  get user$() {
    return this.store.select(state => state.userDetail.user);
  }

  constructor(private userApi: UserApiService, private store: Store) {
  }

  async fetchUser(userId: string) {
    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user: null
      }
    }));
    const user = await this.userApi.getUserById(userId);

    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user
      }
    }));
  }
}
