import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";

import { HomeService } from "../../services/home.service";
import { QrService } from "../../services/qr.service";
import {
  NativePageTransitions,
  NativeTransitionOptions
} from "@ionic-native/native-page-transitions";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public logo: string = "";
  public welcome: string = "";
  public desc: string = "";
  public bg: string = "";
  public visit: boolean = false;

  constructor(
    public navCtrl: NavController,
    public statusBar: StatusBar,
    private home: HomeService,
    private qr: QrService,
    private trans: NativePageTransitions
  ) {}

  ionViewDidLoad() {
    this.home.getHome().subscribe(data => {
      this.logo = data["logo"];
      this.welcome = data["welcome"];
      this.desc = data["desc"];
      this.bg = data["bg"];
    });
  }

  ionViewDidEnter() {
    this.statusBar.styleLightContent();
  }

  goToType() {
    if (this.visit === true) return false;
    this.visit = true;
    this.home.setType(() => {
      this.visit = false;
      // let options: NativeTransitionOptions = {
      //   direction: "left",
      //   duration: 300
      // };
      // this.trans.slide(options);
      this.navCtrl.push("TypePage");
    });
  }

  goToQr() {
    this.qr
      .scan()
      .then(data => {
        this.navCtrl.push("ProductDetailPage", { product_id: data.text });
      })
      .catch(err => console.log(err));
  }

  // ionViewWillLeave() {
  //   let options: NativeTransitionOptions = {
  //     direction: "right",
  //     duration: 300
  //   };
  //   this.trans.slide(options);
  // }
}
