import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CartService, Product } from 'src/app/cart.service';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.page.html',
  styleUrls: ['./order-cart.page.scss'],
})
export class OrderCartPage implements OnInit {

  cart: Product[] = [];
 
  constructor(private cartService: CartService, private alertCtrl: AlertController) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  async checkout() {
    // Perfom PayPal or Stripe checkout process
 
    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'We will deliver your items as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
     
    });
  }

}
