import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class PermissionService {
  public android = new BehaviorSubject<boolean>(false);

  constructor() {}

  setPermission(allow) {
    this.android.next(allow);
  }

  getPermission() {
    return this.android.asObservable();
  }
}
