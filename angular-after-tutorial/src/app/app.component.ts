import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users$ = this.userService.users$;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers();
  }
}
