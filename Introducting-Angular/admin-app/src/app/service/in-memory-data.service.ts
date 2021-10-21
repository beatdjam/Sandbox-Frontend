import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Member} from "../model/member";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      {id: 1, name: '一郎'},
      {id: 2, name: '次郎'},
      {id: 3, name: '三郎'},
      {id: 4, name: '四郎'},
      {id: 5, name: '五郎'},
    ];

    return {members};
  }

  genId(members: Member[]): number {
    return members.length > 0 ? Math.max(...members.map(member => member.id)) + 1 : 11;
  }
}
