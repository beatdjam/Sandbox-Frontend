import { Component, OnInit } from '@angular/core';
import {UserListUsecaseService} from "./user-list-usecase.service";
import {UserListQuery} from "./user-list.query";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$ = this.query.selectAll();
  constructor(private usecase: UserListUsecaseService, private query: UserListQuery) { }

  ngOnInit(): void {
    this.usecase.fetchUsers();
  }
}
