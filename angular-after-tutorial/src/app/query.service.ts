import {Injectable} from "@angular/core";
import {Query} from "@datorama/akita";
import {AkitaState, AkitaStore} from "./store.service";

@Injectable({providedIn: 'root'})
export class AkitaQuery extends Query<AkitaState> {
  constructor(protected override store: AkitaStore) {
    super(store);
  }
}
