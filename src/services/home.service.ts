import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class HomeService {
  public home = new BehaviorSubject<object>({});
  public type = new BehaviorSubject<object>({});
  public product = {};
  public product_detail = {};
  public house_list = [];
  public house_detail = {};

  public firstLoad: boolean = true;

  constructor(private http: HTTP) {}

  public async setIos(callback) {
    try {
      let { data } = await this.http.get(
        "https://maxang-119e0.firebaseapp.com/ios.json",
        {},
        {}
      );
      let res = JSON.parse(data);
      console.log("get ios");
      callback(res["data"]["ios"]);
    } catch (error) {
      console.log(error);
    }
  }
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
        else if (res.name === "HOME_BG_IMAGE") objData["bg"] = res.data;
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

  public async setHouseList(callback) {
    if (!this.isEmpty(this.house_list)) return callback(this.house_list);
    try {
      let { data } = await this.http.get(
        "https://thaicolorid.dss.go.th/api/v1/houses/",
        {},
        {}
      );
      let ress = JSON.parse(data);
      this.house_list = ress.data;
      callback(ress.data);
    } catch (error) {
      callback(error);
    }
  }

  public async setHouseDetail(house_id, callback) {
    if (!this.isEmpty(this.house_detail[house_id]))
      return callback(this.house_detail[house_id]);
    try {
      let { data } = await this.http.get(
        "https://thaicolorid.dss.go.th/api/v1/house/" + house_id,
        {},
        {}
      );
      let ress = JSON.parse(data);
      this.house_detail = { ...this.house_detail, [house_id]: ress };
      callback(ress);
    } catch (error) {
      callback(error);
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
