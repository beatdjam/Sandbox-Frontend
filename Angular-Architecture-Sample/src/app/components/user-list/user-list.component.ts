import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../repository/users.service";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$ = this.service.users$;
  constructor(private service: UsersService) { }

  ngOnInit(): void {
  }
}
