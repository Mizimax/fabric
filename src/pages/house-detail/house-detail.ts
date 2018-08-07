import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomeService } from "../../services/home.service";
import { StatusBar } from "@ionic-native/status-bar";
declare var $: any;

/**
 * Generated class for the HouseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-house-detail",
  templateUrl: "house-detail.html"
})
export class HouseDetailPage {
  private firstStatusBar = false;
  private house_id;
  public house;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar,
    private home: HomeService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HouseDetailPage");
    this.house_id = this.navParams.get("house_id");
    this.home.setHouseDetail(this.house_id, res => {
      this.house = res.data;
    });
    (<any>$(document)).ready(function() {
      (<any>$("#dg-container")).gallery();
    });
  }

  ionViewDidEnter() {
    this.statusBar.overlaysWebView(true);
    this.statusBar.styleLightContent();
  }

  goProduct(product_id) {
    this.navCtrl.push("ProductDetailPage", { product_id: product_id });
  }

  objectSize(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  }

  onScroll(e) {
    if (e.scrollTop > 30) {
      this.statusBar.backgroundColorByHexString("4bb29d");
      this.statusBar.styleDefault();
      this.firstStatusBar = true;
    } else {
      this.statusBar.styleLightContent();
      if (this.firstStatusBar) {
        this.statusBar.overlaysWebView(true);
        this.firstStatusBar = false;
      }
    }
  }
}
