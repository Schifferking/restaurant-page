import Cheeseburger from './images/menu/hamburgers/cheeseburger.jpg';
import OnionBurger from './images/menu/hamburgers/onion-hamburger.jpg';
import ChiliBurger from './images/menu/hamburgers/chili-hamburger.jpg';
import Coke from './images/menu/beverages/coke.jpg';
import Beer from './images/menu/beverages/beer.jpg';
import Milkshake from './images/menu/beverages/milkshake.jpg';
import Water from './images/menu/beverages/water.jpg';
import Juice from './images/menu/beverages/juice.jpg';

export default class Menu {
  static createH1() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    return h1;
  }

  static createH2(content) {
    const h2 = document.createElement('h2');
    const div = Menu.createDiv();
    h2.textContent = content;
    div.appendChild(h2);
    div.classList.add('header-container');
    return div;
  }

  static createH3(content) {
    const h3 = document.createElement('h3');
    h3.textContent = content;
    return h3;
  }

  static createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;
    return p;
  }

  static createDiv() {
    return document.createElement('div');
  }

  static createImage(src) {
    const image = new Image();
    image.src = src;
    return image;
  }

  static createProduct(name, description, price, productSrc) {
    // price is a string
    const productDiv = Menu.createDiv();
    productDiv.classList.add('product-container');
    const productH3 = Menu.createH3(name);
    const image = Menu.createImage(productSrc);
    const productDescription = Menu.createParagraph(description);
    const productPrice = Menu.createParagraph(price);
    productPrice.classList.add('price');
    productDiv.appendChild(productH3);
    productDiv.appendChild(image);
    productDiv.appendChild(productDescription);
    productDiv.appendChild(productPrice);
    return productDiv;
  }

  static createCheeseburger() {
    const name = 'Cheeseburger';
    const description = 'A delicious burger with some cheese slices. Some of the toppings we offer are lettuce, tomato, onion, pickles, and bacon to name a few.';
    const price = '$2.5';
    const productSrc = Cheeseburger;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createOnionBurger() {
    const name = 'Onion burger';
    const description = "From Oklahoma, like the name says, it's main ingredient is onion. The onion is caramelized and crispy. It also usually has beef patty, pickles and mustard or mayonnaise.";
    const price = '$3';
    const productSrc = OnionBurger;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createchiliBurger() {
    const name = 'Chili burger';
    const description = 'This variant contains a not so spicy chili. It is topped with onions and cheese and usually served with fries.';
    const price = '$5';
    const productSrc = ChiliBurger;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createCoke() {
    const name = 'Coke';
    const description = 'A simple, yet popular choice.';
    const price = '$0.5';
    const productSrc = Coke;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createBeer() {
    const name = 'Beer';
    const description = "For some, it's the best drink, for others, not really good.";
    const price = '$4';
    const productSrc = Beer;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createMilkshake() {
    const name = 'Milkshake';
    const description = 'You know it, a mixture of some ingredients, where milk is the main one. Ask for the different flavours we offer.';
    const price = '$3';
    const productSrc = Milkshake;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createWater() {
    const name = 'Water';
    const description = 'Just water.';
    const price = '$2';
    const productSrc = Water;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createJuice() {
    const name = 'Juice';
    const description = 'A single juice bottle. Ask for the options.';
    const price = '$2.5';
    const productSrc = Juice;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static loadBurgers() {
    const burgers = [];
    burgers.push(Menu.createH2('Burgers'));
    burgers.push(Menu.createCheeseburger());
    burgers.push(Menu.createOnionBurger());
    burgers.push(Menu.createchiliBurger());
    return burgers;
  }

  static loadBeverages() {
    const beverages = [];
    beverages.push(Menu.createH2('Beverages'));
    beverages.push(Menu.createCoke());
    beverages.push(Menu.createBeer());
    beverages.push(Menu.createMilkshake());
    beverages.push(Menu.createWater());
    beverages.push(Menu.createJuice());
    return beverages;
  }

  static loadMenu() {
    const main = document.querySelector('main');
    const menuContainer = Menu.createDiv();
    menuContainer.classList.add('menu-container');
    const h1 = Menu.createH1();
    const burgers = Menu.loadBurgers();
    const beverages = Menu.loadBeverages();
    // mix products in one array
    const products = burgers.concat(beverages);
    menuContainer.appendChild(h1);
    products.map(product => menuContainer.appendChild(product));
    main.appendChild(menuContainer);
  }
}
