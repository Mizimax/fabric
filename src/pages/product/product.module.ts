import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ProductPage } from "./product";
import { MenuModule } from "../../components/menu/menu.module";

@NgModule({
  declarations: [ProductPage],
  imports: [IonicPageModule.forChild(ProductPage), MenuModule]
})
export class ProductPageModule {}
