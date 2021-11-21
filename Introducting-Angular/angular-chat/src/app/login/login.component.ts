import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ac-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    const { email, password } = form.value;
    this.authService.login(email, password)
      .then(() => this.router.navigateByUrl('/'));
  }
}
