import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [ModalComponent],
  imports: [IonicPageModule.forChild(ModalComponent)],
  exports: [ModalComponent]
})
export class ModalModule {}
