import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "ProductList",
  templateUrl: "product_list.html"
})
export class ProductListComponent {
  @Input("product") products;
  constructor(public navCtrl: NavController) {}

  firstKey() {
    for (var key in this.products) {
      return key;
    }
  }

  goHouse(house_id) {
    this.navCtrl.push("HouseDetailPage", { house_id: house_id });
  }

  goProduct(product_id) {
    this.navCtrl.push("ProductDetailPage", { product_id: product_id });
  }
}
