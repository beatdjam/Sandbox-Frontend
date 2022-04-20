import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "../data.service";

@Component({
  selector: 'app-async-pipe',
  template: '<div>{{ value$ | async }}</div>'
})
export class AsyncPipeComponent {
  value$: Observable<string>;

  constructor(private dataService: DataService) {
    this.value$ = this.dataService.valueChanges;
  }

}
