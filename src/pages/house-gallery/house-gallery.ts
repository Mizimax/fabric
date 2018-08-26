import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";

/**
 * Generated class for the HouseGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-house-gallery",
  templateUrl: "house-gallery.html"
})
export class HouseGalleryPage {
  public house;
  public modalStatus = false;
  public show = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HouseGalleryPage");

    let house = this.navParams.get("house");
    this.house = house;
  }

  ionViewDidEnter() {
    this.statusBar.styleDefault();
  }
}
