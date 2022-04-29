import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

const apiHost = 'https://reqres.in/api';

interface ApiResponse<T> {
  data: T;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http
      .get<ApiResponse<User[]>>(`${apiHost}/users`)
      .pipe(map(resp => resp.data))
  }
}
