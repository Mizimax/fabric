import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal";
import { IonicPageModule } from "ionic-angular";
import { TooltipsModule } from "ionic-tooltips";

@NgModule({
  declarations: [ModalComponent],
  imports: [IonicPageModule.forChild(ModalComponent), TooltipsModule],
  exports: [ModalComponent]
})
export class ModalModule {}
