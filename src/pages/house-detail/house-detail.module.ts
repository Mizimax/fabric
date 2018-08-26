import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HouseDetailPage } from "./house-detail";
import { KeysPipeModule } from "../../pipes/keys/keys.pipe.module";
import { MenuModule } from "../../components/menu/menu.module";
import { ModalModule } from "../../components/modal/modal.module";

@NgModule({
  declarations: [HouseDetailPage],
  imports: [
    IonicPageModule.forChild(HouseDetailPage),
    KeysPipeModule,
    MenuModule,
    ModalModule
  ]
})
export class HouseDetailPageModule {}
