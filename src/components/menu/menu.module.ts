import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [MenuComponent],
  imports: [IonicPageModule.forChild(MenuComponent)],
  exports: [MenuComponent]
})
export class MenuModule {}
