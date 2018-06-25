import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";

@Injectable()
export class ImageService {
  constructor(private http: HTTP) {}
  public getHome() {
    return this.http.get(
      "https://fabricotop.herokuapp.com/api/v1/image/home",
      {},
      {}
    );
  }
}
