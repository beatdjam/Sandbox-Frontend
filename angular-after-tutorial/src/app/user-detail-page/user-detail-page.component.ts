import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {distinctUntilChanged, map, Subject, takeUntil} from "rxjs";
import {UserDetailUsecase} from "./user-detail-page.usecase";
import {UserDetailPageViewQuery} from "./user-detail-page.view.query";

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnDestroy {
  state$ = this.userDetailViewQuery.fetch();
  private onDestroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private userDetailUsecase: UserDetailUsecase, private userDetailViewQuery: UserDetailPageViewQuery) {
    // this.router.routeReuseStrategy.shouldReuseRouteとかを使っても良さそう
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

