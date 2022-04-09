import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {takeUntil} from "rxjs";
import {UserListFilterState} from "../user-list/user-list.store";

@Component({
  selector: 'app-user-list-filter',
  templateUrl: './user-list-filter.component.html'
})
export class UserListFilterComponent implements OnInit, OnDestroy {
  @Input() set value(value: UserListFilterState) {
    this.setFormValue(value);
  }

  @Output() valueChange = new EventEmitter<UserListFilterState>();

  form: FormGroup;

  private onDestroy = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nameFilter: ['']
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.onDestroy)).subscribe(value => {
      this.valueChange.emit(value);
    });
  }

  ngOnDestroy() {
    this.onDestroy.unsubscribe();
  }

  private setFormValue(value: UserListFilterState) {
    this.form.setValue(value, { emitEvent: false });
  }
}
