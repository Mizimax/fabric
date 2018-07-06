import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ProductDetailPage } from "./product-detail";
import { KeysPipeModule } from "../../pipes/keys/keys.pipe.module";
import { MenuModule } from "../../components/menu/menu.module";

@NgModule({
  declarations: [ProductDetailPage],
  imports: [
    IonicPageModule.forChild(ProductDetailPage),
    KeysPipeModule,
    MenuModule
  ]
})
export class ProductDetailPageModule {}
