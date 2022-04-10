import {User} from "../model/user";

export type UserDetailViewModel = {
  user?: User | null;
}
export const UserDetailViewModel = {
  from(user: User | null): UserDetailViewModel {
    return {user}
  }
}

