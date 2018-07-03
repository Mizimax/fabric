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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar,
    private home: HomeService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductPage");
    this.home.setProduct(res => {
      console.log(res);
      this.products = res.data;
    });
  }

  ionViewDidEnter() {
    this.statusBar.styleDefault();
  }
}
