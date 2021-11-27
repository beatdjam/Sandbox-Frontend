import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {User} from "../../class/user";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'ac-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersRef: AngularFireList<User>;
  users$: Observable<User[]>;
  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list('/users');
  }

  ngOnInit(): void {
    this.users$ = this.usersRef.snapshotChanges().pipe(
      map(snapshots => {
        return snapshots.map(snapshot => {
          const values = snapshot.payload.val();
          return new User(values);
        });
      })
    );
  }

}
