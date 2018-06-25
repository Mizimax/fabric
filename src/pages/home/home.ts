import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner";

import { ImageService } from "../../app/services/image.service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public logo: string = "";
  public welcome: string = "";
  public desc: string = "";

  constructor(
    public navCtrl: NavController,
    private qrScanner: QRScanner,
    public statusBar: StatusBar,
    private image: ImageService
  ) {}

  async ionViewDidLoad() {
    try {
      let { data } = await this.image.getHome();
      let ress = JSON.parse(data);
      console.log(ress);
      ress.data.forEach(res => {
        if (res.name === "HOME_IMAGE") this.logo = res.data;
        else if (res.name === "HOME_WELCOME") this.welcome = res.data;
        else if (res.name === "HOME_TEXT") this.desc = res.data;
      });
    } catch (error) {
      console.log(error);
    }
  }

  ionViewDidEnter() {
    this.statusBar.styleLightContent();
  }

  goToType() {
    this.navCtrl.push("TypePage");
  }

  goToQr() {
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          this.qrScanner.show();
          window.document.querySelector(".logo").classList.add("hide");
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log("Scanned something", text);

            this.qrScanner.hide(); // hide camera preview
            window.document.querySelector(".logo").classList.remove("hide");
            scanSub.unsubscribe(); // stop scanning
          });
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log("Error is", e));
  }
}
