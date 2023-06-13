import Cheeseburger from './images/menu/hamburgers/cheeseburger.jpg';
import OnionBurger from './images/menu/hamburgers/onion-hamburger.jpg';
import ChiliBurger from './images/menu/hamburgers/chili-hamburger.jpg';
import Coke from './images/menu/beverages/coke.jpg';
import Beer from './images/menu/beverages/beer.jpg';
import Milkshake from './images/menu/beverages/milkshake.jpg';
import Water from './images/menu/beverages/water.jpg';
import Juice from './images/menu/beverages/juice.jpg';

export default class Menu {
  createH1() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    return h1;
  }

  createH2(content) {
    const h2 = document.createElement('h2');
    const div = this.createDiv();
    h2.textContent = content;
    div.appendChild(h2);
    div.classList.add('header-container');
    return div;
  }

  createH3(content) {
    const h3 = document.createElement('h3');
    h3.textContent = content;
    return h3;
  }

  createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;
    return p;
  }

  createDiv() {
    return document.createElement('div');
  }

  createImage(src) {
    const image = new Image();
    image.src = src;
    return image;
  }

  createProduct(name, description, price, productSrc) {
    // price is a string
    const productDiv = this.createDiv();
    productDiv.classList.add('product-container');
    const productH3 = this.createH3(name);
    const image = this.createImage(productSrc);
    const productDescription = this.createParagraph(description);
    const productPrice = this.createParagraph(price);
    productPrice.classList.add('price');
    productDiv.appendChild(productH3);
    productDiv.appendChild(image);
    productDiv.appendChild(productDescription);
    productDiv.appendChild(productPrice);
    return productDiv;
  }

  createCheeseburger() {
    const name = 'Cheeseburger';
    const description = 'A delicious burger with some cheese slices. Some of the toppings we offer are lettuce, tomato, onion, pickles, and bacon to name a few.';
    const price = '$2.5';
    const productSrc = Cheeseburger;
    return this.createProduct(name, description, price, productSrc);
  }

  createOnionBurger() {
    const name = 'Onion burger';
    const description = "From Oklahoma, like the name says, it's main ingredient is onion. The onion is caramelized and crispy. It also usually has beef patty, pickles and mustard or mayonnaise.";
    const price = '$3';
    const productSrc = OnionBurger;
    return this.createProduct(name, description, price, productSrc);
  }

  createchiliBurger() {
    const name = 'Chili burger';
    const description = 'This variant contains a not so spicy chili. It is topped with onions and cheese and usually served with fries.';
    const price = '$5';
    const productSrc = ChiliBurger;
    return this.createProduct(name, description, price, productSrc);
  }

  createCoke() {
    const name = 'Coke';
    const description = 'A simple, yet popular choice.';
    const price = '$0.5';
    const productSrc = Coke;
    return this.createProduct(name, description, price, productSrc);
  }

  createBeer() {
    const name = 'Beer';
    const description = "For some, it's the best drink, for others, not really good.";
    const price = '$4';
    const productSrc = Beer;
    return this.createProduct(name, description, price, productSrc);
  }

  createMilkshake() {
    const name = 'Milkshake';
    const description = 'You know it, a mixture of some ingredients, where milk is the main one. Ask for the different flavours we offer.';
    const price = '$3';
    const productSrc = Milkshake;
    return this.createProduct(name, description, price, productSrc);
  }

  createWater() {
    const name = 'Water';
    const description = 'Just water.';
    const price = '$2';
    const productSrc = Water;
    return this.createProduct(name, description, price, productSrc);
  }

  createJuice() {
    const name = 'Juice';
    const description = 'A single juice bottle. Ask for the options.';
    const price = '$2.5';
    const productSrc = Juice;
    return this.createProduct(name, description, price, productSrc);
  }

  loadBurgers() {
    const burgers = [];
    burgers.push(this.createH2('Burgers'));
    burgers.push(this.createCheeseburger());
    burgers.push(this.createOnionBurger());
    burgers.push(this.createchiliBurger());
    return burgers;
  }

  loadBeverages() {
    const beverages = [];
    beverages.push(this.createH2('Beverages'));
    beverages.push(this.createCoke());
    beverages.push(this.createBeer());
    beverages.push(this.createMilkshake());
    beverages.push(this.createWater());
    beverages.push(this.createJuice());
    return beverages;
  }

  loadMenu() {
    const main = document.querySelector('main');
    const menuContainer = this.createDiv();
    menuContainer.classList.add('menu-container');
    const h1 = this.createH1();
    const burgers = this.loadBurgers();
    const beverages = this.loadBeverages();
    // mix products in one array
    const products = burgers.concat(beverages);
    menuContainer.appendChild(h1);
    for (let product of products)
      menuContainer.appendChild(product);
    main.appendChild(menuContainer);
  }
}
