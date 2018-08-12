import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { HomeService } from "../../services/home.service";

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-product-detail",
  templateUrl: "product-detail.html"
})
export class ProductDetailPage {
  private product_id: number;
  private firstStatusBar = false;
  public product;
  @ViewChild("images") images: ElementRef;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar,
    private home: HomeService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductDetailPage");
    this.product_id = this.navParams.get("product_id");
    this.home.setProductDetail(this.product_id, res => {
      this.product = res.data;

      setTimeout(() => {
        let position =
          (this.images.nativeElement.scrollWidth -
            this.images.nativeElement.offsetWidth) /
          2;
        this.images.nativeElement.scrollLeft = position;
      }, 0);
    });
  }

  // ionViewDidEnter() {
  //   this.statusBar.overlaysWebView(true);
  //   this.statusBar.styleDefault();
  // }

  firstImage() {
    for (var key in this.product.image_url) {
      return key;
    }
  }

  goHouse(house_id) {
    this.navCtrl.push("HouseDetailPage", { house_id: house_id });
  }

  // onScroll(e) {
  //   if (e.scrollTop > 30) {
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
