import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ProductPage } from "./product";
import { MenuModule } from "../../components/menu/menu.module";
import { ProductListModule } from "../../components/product_list/product_list.module";
import { KeysPipeModule } from "../../pipes/keys/keys.pipe.module";

@NgModule({
  declarations: [ProductPage],
  imports: [
    IonicPageModule.forChild(ProductPage),
    MenuModule,
    ProductListModule,
    KeysPipeModule
  ]
})
export class ProductPageModule {}
