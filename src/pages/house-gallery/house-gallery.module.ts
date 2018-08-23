import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HouseGalleryPage } from "./house-gallery";
import { MenuModule } from "../../components/menu/menu.module";

@NgModule({
  declarations: [HouseGalleryPage],
  imports: [IonicPageModule.forChild(HouseGalleryPage), MenuModule]
})
export class HouseGalleryPageModule {}
