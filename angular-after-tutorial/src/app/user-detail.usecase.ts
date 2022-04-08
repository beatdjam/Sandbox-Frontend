import {Injectable} from "@angular/core";
import {UserApiService} from "./user-api.service";
import {AkitaQuery, AkitaStore} from "./store.service";

@Injectable({providedIn: 'root'})
export class UserDetailUsecase {
  get user$() {
    return this.query.select(state => state.userDetail.user);
  }

  constructor(private userApi: UserApiService, private store: AkitaStore, private query: AkitaQuery) {
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
