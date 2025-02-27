import { Component } from "@angular/core";
import { QrService } from "../../services/qr.service";
import { NavController } from "ionic-angular";
import { HomeService } from "../../services/home.service";
import { Platform } from "ionic-angular";
import { PermissionService } from "../../services/permission.service";
declare var cordova: any;

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public permissionAndroid = false;

  constructor(
    private qr: QrService,
    public navCtrl: NavController,
    private home: HomeService,
    private platform: Platform,
    private permission: PermissionService
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

    this.permission.getPermission().subscribe(allow => {
      this.permissionAndroid = allow;
    });
  }

  ionViewDidLoad() {}

  ionViewDidEnter() {
    if (this.platform.is("android")) {
      if (!this.home.firstLoad) {
        this.permissionAndroid = true;
        (<any>document).getElementById("frame").contentWindow.location.reload();
      } else this.home.firstLoad = false;
    }
  }

  ionViewDidLeave() {
    if (this.platform.is("android")) {
      this.permissionAndroid = false;
    }
  }

  goToQr() {
    this.qr
      .scan()
      .then(data => {
        if (!data.cancelled) {
          this.navCtrl.push("HouseDetailPage", { house_id: data.text });
        } else {
          if (this.platform.is("android")) {
            this.permissionAndroid = true;
            (<any>document)
              .getElementById("frame")
              .contentWindow.location.reload();
          }
        }
      })
      .catch(err => console.log(err));
  }

  goToHouseList() {
    this.navCtrl.push("HouseListPage");
  }
}
