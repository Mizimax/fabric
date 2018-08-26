import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";
import { QrService } from "../../services/qr.service";

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "menu",
  templateUrl: "menu.html"
})
export class MenuComponent {
  @Input("url")
  image_1: string;
  constructor(public navCtrl: NavController, private qr: QrService) {}

  goBack() {
    this.navCtrl.pop();
  }

  goHome() {
    this.navCtrl.popTo(this.navCtrl.getByIndex(1));
  }

  goGallery(house) {
    this.navCtrl.push("HouseGalleryPage", { house: house });
  }
}
