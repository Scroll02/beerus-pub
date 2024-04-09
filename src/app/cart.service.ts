import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  description: string;
  img: string;

}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'Asahi (6 pack)', price: 549, amount: 0, description: 'With its refreshing barley flavor and crisp aftertaste, Asahi Super Dry is by far the most popular high-quality beer in Japan. Since its debut in 1987 as Japan’s first dry beer, it has continued to improve the taste and excitement of beer.',img: "../../assets/img/product/asahi.png"},
    { id: 1, name: 'Budlight (6 pack)', price: 599, amount: 0, description: 'Introduced in 1982, Bud Light is a premium light lager with a superior drinkability that has made it the best-selling and most popular beer in the United States.',img: "../../assets/img/product/budlight.png"},
    { id: 2, name: 'Budweiser (6 pack)', price: 599, amount: 0, description: 'An iconic beer, Budweiser Lager is medium-bodied and full of flavour. Fresh rice and carefully filtered water combine with premium barley malt, ABV: 4.5%.',img: "../../assets/img/product/budweiser.png"},
    { id: 3, name: 'Corona (6 pack)', price: 599, amount: 0, description: 'Corona Extra is the number-one selling beer in Mexico and the leading export brand from Mexico. It is best enjoyed with a wedge of lime.',img: "../../assets/img/product/corona.png"},
    { id: 4, name: 'Heineken (6 pack)', price: 399, amount: 0, description: 'Born in Amsterdam and raised by the world - Heineken is truly the most international beer with its presence in 192 countries! With a 5% ABV, Heineken has a crisp balanced taste, a testament to its all natural ingredients and 28 day brewing process.',img: "../../assets/img/product/heineken.png"},
    { id: 5, name: 'Red Horse (6 pack)', price: 349, amount: 0, description: 'Red Horse Beer is our strong high alcohol beer brand, the #1 beer in the Philippines. It has a distinctive sweetish taste balanced by a smooth bitterness that leads to a strong alcohol kick.Alcohol Content: 6.9%.',img: "../../assets/img/product/redHorse.png"},
    { id: 6, name: 'San Mig Light (6 pack)', price: 349, amount: 0, description: 'San Mig Light is our low calorie Beer. It is the Beer for people who look forward to the fun and excitement of drinking moments with friends. Alcohol content: 5%',img: "../../assets/img/product/sanMigLight.png"},
    { id: 7, name: 'San Miguel Pale Pilsen (6 pack)', price: 349, amount: 0, description: 'A pale, golden lager with a world-renowned full-bodied flavour. Considered by beer drinkers to be the original and iconic Filipino beer. Alcohol Content: 5%',img: "../../assets/img/product/sanMiguelPalePilsen.png"},
    { id: 8, name: 'Tanduay Ice (6 pack)', price: 245, amount: 0, description: 'They said that Tanduay Ice is ladies beer because like ladies drinks or cocktails, they give the best sensations to the taste buds, and yet give the beer-goggle effects.',img: "../../assets/img/product/tanduayIce.png"},
    { id: 9, name: 'Tiger (6 pack)', price: 349, amount: 0, description: 'Deliver intense refreshment with Tiger , a crisp drink of sterling innovation. Tiger is ice-filtered with world-class brewing technology for clarity.',img: "../../assets/img/product/tiger.png"}
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
 constructor(){

 }
  
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
