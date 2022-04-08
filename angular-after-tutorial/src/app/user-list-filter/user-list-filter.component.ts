import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {takeUntil} from "rxjs";
import {UserListFilter} from "../store.service";

@Component({
  selector: 'app-user-list-filter',
  templateUrl: './user-list-filter.component.html'
})
export class UserListFilterComponent implements OnInit, OnDestroy {
  @Input() set value(value: UserListFilter) {
    this.setFormValue(value);
  }

  @Output() valueChange = new EventEmitter<UserListFilter>();

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

  private setFormValue(value: UserListFilter) {
    this.form.setValue(value, { emitEvent: false });
  }
}
