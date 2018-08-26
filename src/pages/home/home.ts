import { Component } from "@angular/core";
import { QrService } from "../../services/qr.service";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(private qr: QrService, public navCtrl: NavController) {
    // navCtrl.push("HouseDetailPage", { house_id: 1 });
  }

  ionViewDidEnter() {
    // (<any>document).getElementById("frame").contentWindow.location.reload();
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
