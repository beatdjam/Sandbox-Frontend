import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {takeUntil} from "rxjs";

@Component({
  selector: 'app-user-list-filter',
  templateUrl: './user-list-filter.component.html'
})
export class UserListFilterComponent implements OnInit, OnDestroy {
  @Output() valueChange = new EventEmitter<string>();

  form: FormGroup;

  private onDestroy = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({nameFilter: ['']});
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.onDestroy)).subscribe(value => {
      this.valueChange.emit(value['nameFilter']);
    });
  }

  ngOnDestroy() {
    this.onDestroy.unsubscribe();
  }
}
