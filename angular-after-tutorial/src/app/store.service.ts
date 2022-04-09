import {User} from "./model/user";
import {Store as AkitaStateStore, StoreConfig} from "@datorama/akita";
import {Injectable} from "@angular/core";

export interface UserListFilter {
  nameFilter: string;
}

export interface AkitaState {
  userList: {
    items: User[];
    filter: UserListFilter;
  },
  userDetail: {
    user: User | null;
  };
}

export function createInitialAkitaState(): AkitaState {
  return {
    userList: {
      items: [],
      filter: {
        nameFilter: ''
      }
    },
    userDetail: {
      user: null
    }
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'state'})
export class AkitaStore extends AkitaStateStore<AkitaState> {
  constructor() {
    super(createInitialAkitaState());
  }
}

