import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HTTP } from "@ionic-native/http";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";

import { HomeService } from "../services/home.service";
import { QrService } from "../services/qr.service";
import { NativePageTransitions } from "@ionic-native/native-page-transitions";
import { CallNumber } from "@ionic-native/call-number";
import { AndroidPermissions } from "@ionic-native/android-permissions";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PermissionService } from "../services/permission.service";

import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicImageLoader.forRoot(),
    IonicModule.forRoot(MyApp, {
      pageTransition: "ios-transition"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    HomeService,
    QrService,
    BarcodeScanner,
    NativePageTransitions,
    CallNumber,
    AndroidPermissions,
    PermissionService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
