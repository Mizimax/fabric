import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomeService } from "../../services/home.service";

/**
 * Generated class for the HouseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-house-list",
  templateUrl: "house-list.html"
})
export class HouseListPage {
  public houses = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private home: HomeService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HouseListPage");

    this.home.setHouseList(res => {
      console.log(res);
      this.houses = res;
    });
  }

  goHouse(house_id) {
    this.navCtrl.push("HouseDetailPage", { house_id: house_id });
  }

  getFirstImage(index) {
    let first = JSON.parse(this.houses[index].house_image)[0];
    return first;
  }
}
