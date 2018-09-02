import { Component } from "@angular/core";
import { QrService } from "../../services/qr.service";
import { NavController } from "ionic-angular";
import { HomeService } from "../../services/home.service";
import { Platform } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    private qr: QrService,
    public navCtrl: NavController,
    private home: HomeService,
    private platform: Platform
  ) {
    // navCtrl.push("HouseDetailPage", { house_id: 1 });
  }

  ionViewWillLoad() {
    if (this.platform.is("ios")) {
      this.goToQr();
    }
    // this.androidPermissions
    //   .checkPermission(this.androidPermissions.PERMISSION.CAMERA)
    //   .then(
    //     result => {
    //       console.log("Has permission?", result.hasPermission);
    //       if (!result.hasPermission)
    //         this.androidPermissions
    //           .requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    //           .then(result => {
    //             console.log(result);
    //             (<any>document)
    //               .getElementById("frame")
    //               .contentWindow.location.reload();
    //           });
    //     },
    //     err =>
    //       this.androidPermissions.requestPermission(
    //         this.androidPermissions.PERMISSION.CAMERA
    //       )
    //   );
  }

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
