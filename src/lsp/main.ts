/*
Liskov substitution principle (Princípio da substituição de Liskov) -
Se $(x) é uma propriedade demonstrável dos objectos x de tipo T. Então $(y)
deve ser verdadeiro para objectos y de tipo S onde S onde é um subtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
Mais simples ainda: Se meu programa espera um animal, algo do tipo
Cachoro (que herda de Animal) deve servir como qualquer outro Animal.
 */
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './classes/discount';

// eslint-disable-next-line
const fiftyPercentDiscount = new FiftyPercentDiscount();
// eslint-disable-next-line
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));
//shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
