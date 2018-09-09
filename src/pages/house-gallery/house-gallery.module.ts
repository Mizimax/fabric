import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HouseGalleryPage } from "./house-gallery";
import { MenuModule } from "../../components/menu/menu.module";
import { SafePipe } from "../../pipes/safe/safe.pipe";
import { IonicImageLoader } from "ionic-image-loader";

@NgModule({
  declarations: [HouseGalleryPage, SafePipe],
  imports: [
    IonicPageModule.forChild(HouseGalleryPage),
    MenuModule,
    IonicImageLoader
  ]
})
export class HouseGalleryPageModule {}
