import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {map, Observable} from "rxjs";

const apiHost = 'https://reqres.in/api';

interface ApiResponse<T> {
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  get users$(): Observable<User[]> {
    return this.http
      .get<ApiResponse<User[]>>(`${apiHost}/users`)
      .pipe(map(resp => resp.data))
  }
}
