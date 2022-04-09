import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {distinctUntilChanged, map, Subject, takeUntil} from "rxjs";
import {UserDetailUsecase} from "./user-detail-page.usecase";

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnDestroy {
  user$ = this.userDetailUsecase.user$;
  private onDestroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private userDetailUsecase: UserDetailUsecase) {
    this.route.params.pipe(
      takeUntil(this.onDestroy$),
      map(params => params['userId']),
      distinctUntilChanged()
    ).subscribe(userId => this.userDetailUsecase.fetchUser(userId));
  }

  ngOnDestroy(): void {
    this.onDestroy$.complete()
  }

}
