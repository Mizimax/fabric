import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomeService } from "../../services/home.service";
import { StatusBar } from "@ionic-native/status-bar";
import { CallNumber } from "@ionic-native/call-number";
import { Platform } from "ionic-angular";
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
  public playBut = false;
  public modalStatus: boolean = false;
  public type = "flag";
  public house_index = 1;
  public error_msg = "";

  @ViewChild('vid') vid;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar,
    private home: HomeService,
    private callNumber: CallNumber,
    private platform: Platform
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HouseDetailPage");
    this.house_id = this.navParams.get("house_id");
    this.home.setHouseDetail(this.house_id, res => {
      if (res.status === "SUCCESS") {
        this.house = res.data;
        this.house.house_color = JSON.parse(res.data.house_color);
        this.house.house_image = JSON.parse(res.data.house_image);
      } else {
        this.house = res;
        this.error_msg = "ไม่พบบ้านนี้ !";
      }
      setTimeout(() => {
        this.vid.nativeElement.play();
      }, 500);
      console.log(res);
    });
  }

  ionViewDidEnter() {
    if(this.platform.is('ios'))
      this.statusBar.styleDefault();
    else
      this.statusBar.styleLightContent();
  }

  changeType(type) {
    this.type = type;
  }

  call(tel) {
    this.callNumber
      .callNumber(tel, true)
      .then(res => console.log("Launched dialer!", res))
      .catch(err => console.log("Error launching dialer", err));
  }

  openMap() {
    window.open(this.house.house_address_url, "_system", "location=yes");
  }

  modalToggle() {
    this.modalStatus = !this.modalStatus;
  }

  play() {
    this.playBut = false;
  }

  vidEnded() {
    this.playBut = true;
  }

  goProduct(product_id) {
    this.navCtrl.push("ProductDetailPage", { product_id: product_id });
  }

  goGallery(house) {
    this.navCtrl.push("HouseGalleryPage", { house: house });
  }

  objectSize(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  }
}
