import { Component, ViewChild, ElementRef } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage{
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
 
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
  
  constructor(private cartService: CartService, private router: Router) {
    var Img = ""
  }
 
  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  addToCart(product) {
    this.cartService.addProduct(product);
  }
  openCart() {
    this.router.navigate(['order-cart']);
  }



}
