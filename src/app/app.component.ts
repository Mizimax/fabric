import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";

import { HomeService } from "../services/home.service";
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { PermissionService } from "../services/permission.service";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private androidPermissions: AndroidPermissions,
    private permission: PermissionService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      splashScreen.hide();
      statusBar.overlaysWebView(true);
      if (platform.is("ios")) {
        statusBar.styleDefault();
      }

      this.androidPermissions
        .checkPermission(this.androidPermissions.PERMISSION.CAMERA)
        .then(
          result => {
            console.log("Has permission?", result.hasPermission);
            if (!result.hasPermission) {
              this.androidPermissions
                .requestPermission(this.androidPermissions.PERMISSION.CAMERA)
                .then(result => {
                  this.permission.setPermission(true);
                });
            } else {
              this.permission.setPermission(true);
            }
          },
          err =>
            this.androidPermissions.requestPermission(
              this.androidPermissions.PERMISSION.CAMERA
            )
        );
    });
  }
}
