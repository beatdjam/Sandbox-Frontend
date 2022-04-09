import {User} from "../model/user";
import {Injectable} from "@angular/core";
import {Store, StoreConfig} from "@datorama/akita";

export interface UserDetailState {
  user: User | null;
}

export function createInitialUserDetailState(): UserDetailState {
  return {user: null};
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'user-detail'})
export class UserDetailPageStore extends Store<UserDetailState> {
  constructor() {
    super(createInitialUserDetailState());
  }
}
