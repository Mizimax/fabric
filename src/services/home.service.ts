import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class HomeService {
  public home = new BehaviorSubject<object>({});
  public type = new BehaviorSubject<object>({});
  public product = {};
  public product_detail = {};
  public house_detail = {};

  constructor(private http: HTTP) {}
  public async setHome(callback) {
    try {
      let { data } = await this.http.get(
        "https://fabricotop.herokuapp.com/api/v1/image/home",
        {},
        {}
      );
      let ress = JSON.parse(data);
      let objData = {};
      ress.data.forEach(res => {
        if (res.name === "HOME_IMAGE") objData["logo"] = res.data;
        else if (res.name === "HOME_WELCOME") objData["welcome"] = res.data;
        else if (res.name === "HOME_TEXT") objData["desc"] = res.data;
      });
      this.home.next(objData);
      console.log("get home");
      callback();
    } catch (error) {
      console.log(error);
    }
  }

  public async setType(callback) {
    try {
      let { data } = await this.http.get(
        "https://fabricotop.herokuapp.com/api/v1/image/type",
        {},
        {}
      );
      let ress = JSON.parse(data);
      let objData = {};
      ress.data.forEach(res => {
        if (res.name === "TYPE_IMAGE_1") objData["image_1"] = res.data;
        else if (res.name === "TYPE_IMAGE_2") objData["image_2"] = res.data;
        else if (res.name === "TYPE_TEXT_1") objData["text_1"] = res.data;
        else if (res.name === "TYPE_TEXT_2") objData["text_2"] = res.data;
      });
      this.type.next(objData);
      console.log("get type");
      callback();
    } catch (error) {
      console.log(error);
    }
  }

  public async setProduct(type, callback) {
    if (!this.isEmpty(this.product[type])) return callback(this.product[type]);
    try {
      let { data } = await this.http.get(
        "https://fabricotop.herokuapp.com/api/v1/products/" + type,
        {},
        {}
      );
      let ress = JSON.parse(data);
      this.product = { ...this.product, [type]: ress };
      callback(ress);
    } catch (error) {
      console.log(error);
    }
  }

  public async setProductDetail(product_id, callback) {
    if (!this.isEmpty(this.product_detail[product_id]))
      return callback(this.product_detail[product_id]);
    try {
      let { data } = await this.http.get(
        "https://fabricotop.herokuapp.com/api/v1/product/" + product_id,
        {},
        {}
      );
      let ress = JSON.parse(data);
      this.product_detail = { ...this.product_detail, [product_id]: ress };
      callback(ress);
    } catch (error) {
      console.log(error);
    }
  }

  public async setHouseDetail(house_id, callback) {
    if (!this.isEmpty(this.house_detail[house_id]))
      return callback(this.house_detail[house_id]);
    try {
      let { data } = await this.http.get(
        "https://fabricotop.herokuapp.com/api/v1/house/" + house_id,
        {},
        {}
      );
      let ress = JSON.parse(data);
      this.product_detail = { ...this.product_detail, [house_id]: ress };
      callback(ress);
    } catch (error) {
      console.log(error);
    }
  }

  private isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
  }

  public getProduct() {
    return this.product;
  }

  public getType() {
    return this.type.getValue();
  }

  public getHome() {
    return this.home.asObservable();
  }
}
