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
  public ios = false;

  constructor(
    private qr: QrService,
    public navCtrl: NavController,
    private home: HomeService,
    private platform: Platform
  ) {
    // navCtrl.push("HouseDetailPage", { house_id: 1 });
  }

  ionViewWillLoad() {
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
    if (this.platform.is("ios")) {
      this.ios = true;
      this.goToQr();
    }
  }

  ionViewDidEnter() {
    if (this.platform.is("ios")) {
      this.ios = true;
      this.goToQr();
    }
    else {
      if (!this.home.firstLoad)
        (<any>document).getElementById("frame").contentWindow.location.reload();
      else this.home.firstLoad = false;
    }
  }

  goToQr() {
    this.qr
      .scan()
      .then(data => {
        if (!data.cancelled){
          this.navCtrl.push("HouseDetailPage", { house_id: data.text });
        }
        else {
          if(this.platform.is('ios'))
            this.goToQr();
          else
          (<any>document)
            .getElementById("frame")
            .contentWindow.location.reload();
        }
        
      })
      .catch(err => console.log(err));
  }
}
