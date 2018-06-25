import { Component } from "@angular/core";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the TypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-type",
  templateUrl: "type.html"
})
export class TypePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar
  ) {}

  ionViewDidEnter() {
    this.statusBar.styleDefault();
  }
}
