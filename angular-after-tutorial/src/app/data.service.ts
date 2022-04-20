import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private valueSubject = new BehaviorSubject<string>('initial');

  get valueChanges() {
    return this.valueSubject.asObservable();
  }

  setValue(value: string) {
    this.valueSubject.next(value);
  }
}
