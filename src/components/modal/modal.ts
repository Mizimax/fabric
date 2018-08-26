import { Component, Input, Output, EventEmitter } from "@angular/core";

/**
 * Generated class for the ModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "modal",
  templateUrl: "modal.html"
})
export class ModalComponent {
  @Input("modalStatus")
  public modalStatus;
  @Input("content")
  public content;
  @Input("type")
  public type;
  @Input("index")
  public house_index;
  @Output()
  close: EventEmitter<any> = new EventEmitter();
  constructor() {}

  closeModal() {
    this.close.emit(true);
  }
}
