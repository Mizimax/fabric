import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HouseListPage } from "./house-list";
import { MenuModule } from "../../components/menu/menu.module";

@NgModule({
  declarations: [HouseListPage],
  imports: [IonicPageModule.forChild(HouseListPage), MenuModule]
})
export class HouseListPageModule {}
