import { Component } from "@angular/core";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomeService } from "../../services/home.service";
import {
  NativePageTransitions,
  NativeTransitionOptions
} from "@ionic-native/native-page-transitions";

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
  public image_1: string = "";
  public image_2: string = "";
  public text_1: string = "";
  public text_2: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar,
    private home: HomeService,
    private trans: NativePageTransitions
  ) {}

  ionViewDidLoad() {
    let data = this.home.getType();
    this.image_1 = data["image_1"];
    this.image_2 = data["image_2"];
    this.text_1 = data["text_1"];
    this.text_2 = data["text_2"];
  }

  ionViewDidEnter() {
    this.statusBar.overlaysWebView(true);
  }

  goCotton() {
    this.navCtrl.push("ProductPage", {
      type: "cotton"
    });
  }

  goSilk() {
    this.navCtrl.push("ProductPage", {
      type: "silk"
    });
  }

  // ionViewWillEnter() {
  //   let options: NativeTransitionOptions = {
  //     direction: "left",
  //     duration: 200
  //   };
  //   this.trans.slide(options);
  // }

  // ionViewWillLeave() {
  //   let options = {
  //     duration: 500,
  //     androiddelay: 0,
  //     iosdelay: 0
  //   };
  //   this.trans.fade(options);
  // }
}
