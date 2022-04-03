import {User} from "./user";

export interface UserListFilter {
  nameFilter: string;
}


export interface State {
  userList: {
    users: User[];
    filter: UserListFilter;
  };
}

export const initialState: State = {
  userList: {
    users: [],
    filter: {
      nameFilter: ''
    }
  }
};
