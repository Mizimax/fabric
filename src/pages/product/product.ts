import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { HomeService } from "../../services/home.service";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-product",
  templateUrl: "product.html"
})
export class ProductPage {
  public products;
  public product_type;

  private firstStatusBar = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar,
    private home: HomeService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductPage");

    let type = this.navParams.get("type");
    this.product_type = type === "cotton" ? "C O T T O N" : "S I L K";
    this.home.setProduct(type, res => {
      this.products = res.data;
    });
  }

  ionViewDidEnter() {
    // this.statusBar.overlaysWebView(true);
    this.statusBar.styleDefault();
  }

  // onScroll(e) {
  //   if (e.scrollTop > 38) {
  //     this.statusBar.backgroundColorByHexString("4bb29d");
  //     this.statusBar.styleLightContent();
  //     this.firstStatusBar = true;
  //   } else {
  //     this.statusBar.styleDefault();
  //     if (this.firstStatusBar) {
  //       this.statusBar.overlaysWebView(true);
  //       this.firstStatusBar = false;
  //     }
  //   }
  // }
}
