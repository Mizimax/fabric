import { Component } from "@angular/core";
import { QrService } from "../../services/qr.service";
import { NavController } from "ionic-angular";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    private qr: QrService,
    public navCtrl: NavController,
    private home: HomeService
  ) {
    // navCtrl.push("HouseDetailPage", { house_id: 1 });
  }

  ionViewWillLoad() {}

  ionViewDidEnter() {
    if (!this.home.firstLoad)
      (<any>document).getElementById("frame").contentWindow.location.reload();
    else this.home.firstLoad = false;
  }

  goToQr() {
    this.qr
      .scan()
      .then(data => {
        if (!data.cancelled)
          this.navCtrl.push("HouseDetailPage", { house_id: data.text });
        else
          (<any>document)
            .getElementById("frame")
            .contentWindow.location.reload();
      })
      .catch(err => console.log(err));
  }
}
