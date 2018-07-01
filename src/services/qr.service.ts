import { Injectable } from "@angular/core";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

@Injectable()
export class QrService {
  constructor(private barcodeScanner: BarcodeScanner) {}

  public scan() {
    return this.barcodeScanner.scan();
  }
}
