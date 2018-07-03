import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product_list";
import { IonicPageModule } from "ionic-angular";
import { KeysPipeModule } from "../../pipes/keys/keys.pipe.module";

@NgModule({
  declarations: [ProductListComponent],
  imports: [IonicPageModule.forChild(ProductListComponent), KeysPipeModule],
  exports: [ProductListComponent]
})
export class ProductListModule {}
