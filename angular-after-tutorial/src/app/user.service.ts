import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable({ providedIn: 'root' })
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);

  get users$(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  fetchUsers(): void {
    this.http
      .get<{ data: User[] }>('https://reqres.in/api/users')
      .pipe(map(resp => resp.data))
      .subscribe(users => this.usersSubject.next(users));
  }

  constructor(private http: HttpClient) { }
}
