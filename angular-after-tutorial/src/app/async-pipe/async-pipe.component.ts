import {Component} from '@angular/core';
import {combineLatest, Observable} from "rxjs";
import {DataService} from "../data.service";

@Component({
  selector: 'app-async-pipe',
  template: `
    <ng-container *ngIf="state$ | async as state">
      <div>1. {{ state.value }}</div>
      <div>2. {{ state.value }}</div>
    </ng-container>
  `
})
export class AsyncPipeComponent {
  readonly state$: Observable<State>;

  constructor(private dataService: DataService) {
    this.state$ = combineLatest(
      [this.dataService.valueChanges],
      (value) => ({value})
    );
  }

}

type State = {
  value: any;
};
