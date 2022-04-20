import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-explicit-subscribe',
  template: '<div>{{ value }}</div>'
})
export class ExplicitSubscribeComponent implements OnInit, OnDestroy {
  value: any;
  private onDestroy$ = new Subject();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(value => this.value = value);
  }

  ngOnDestroy() {
    this.onDestroy$.complete();
  }
}
