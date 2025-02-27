import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TypePage } from "./type";
import { MenuModule } from "../../components/menu/menu.module";

@NgModule({
  declarations: [TypePage],
  imports: [IonicPageModule.forChild(TypePage), MenuModule]
})
export class TypePageModule {}
