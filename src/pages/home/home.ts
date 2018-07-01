import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";

import { HomeService } from "../../services/home.service";
import { QrService } from "../../services/qr.service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public logo: string = "";
  public welcome: string = "";
  public desc: string = "";
  public visit: boolean = false;

  constructor(
    public navCtrl: NavController,
    public statusBar: StatusBar,
    private home: HomeService,
    private qr: QrService
  ) {}

  ionViewDidLoad() {
    this.home.getHome().subscribe(data => {
      this.logo = data["logo"];
      this.welcome = data["welcome"];
      this.desc = data["desc"];
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
      this.navCtrl.push("TypePage");
    });
  }

  goToQr() {
    this.qr
      .scan()
      .then(data => {
        console.log("Barcode data", data);
      })
      .catch(err => console.log(err));
  }
}
