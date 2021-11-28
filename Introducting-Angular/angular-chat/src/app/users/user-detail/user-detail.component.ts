import { Component, OnInit } from '@angular/core';
import {User} from "../../class/user";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AngularFireDatabase} from "@angular/fire/database";
import {Location} from "@angular/common";

@Component({
  selector: 'ac-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.user$ = this.db.object<User>(`/users/${id}`).valueChanges();
  }

  goBack(event: MouseEvent): void {
    event.preventDefault();
    this.location.back();
  }
}
