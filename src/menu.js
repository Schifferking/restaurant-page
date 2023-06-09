export default class Menu {
  createH1() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    return h1;
  }

  createH2(content) {
    const h2 = document.createElement('h2');
    h2.textContent = content;
    return h2;
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

  createProduct(name, description, price) {
    // price is a string
    const productDiv = this.createDiv();
    const productH3 = this.createH3(name);
    const productDescription = this.createParagraph(description);
    const productPrice = this.createParagraph(price);
    productDiv.appendChild(productH3);
    productDiv.appendChild(productDescription);
    productDiv.appendChild(productPrice);
    return productDiv;
  }

  createCheeseburger() {
    const name = 'Cheeseburger';
    const description = 'A delicious burger with some cheese slices. Some of the toppings we offer are lettuce, tomato, onion, pickles, and bacon to name a few.';
    const price = '$2.5';
    return this.createProduct(name, description, price);
  }

  createXTudo() {
    const name = 'X-Tudo';
    const description = 'This is one of our tallest burgers. Like the cheeseburger, you can choose from many toppings; some of the most common are: beef patties, bacon, lettuce, tomato, corn, sausages and mayonnaise.';
    const price = '$4';
    return this.createProduct(name, description, price);
  }

  createOnionBurger() {
    const name = 'Onion burger';
    const description = "From Oklahoma, like the name says, it's main ingredient is onion. The onion is caramelized and crispy. It also usually has beef patty, pickles and mustard or mayonnaise.";
    const price = '$3';
    return this.createProduct(name, description, price);
  }

  createchiliBurger() {
    const name = 'Chili burger';
    const description = 'This variant contains a not so spicy chili. It is topped with onions and cheese and usually served with fries.';
    const price = '$5';
    return this.createProduct(name, description, price);
  }

  createButterBurger() {
    const name = 'Butter burger';
    const description = 'A great choice if you really like butter. Also contains onions.';
    const price = '$3';
    return this.createProduct(name, description, price);
  }

  createCoke() {
    const name = 'Coke';
    const description = 'A simple, yet popular choice.';
    const price = '$0.5';
    return this.createProduct(name, description, price);
  }

  createBeer() {
    const name = 'Beer';
    const description = "For some, it's the best drink, for others, not really good.";
    const price = '$4';
    return this.createProduct(name, description, price);
  }

  createMilkshake() {
    const name = 'Milkshake';
    const description = 'You know it, a mixture of some ingredients, where milk is the main one. Ask for the different flavours we offer.';
    const price = '$3';
    return this.createProduct(name, description, price);
  }

  createWater() {
    const name = 'Water';
    const description = 'Just a water bottle.';
    const price = '$2';
    return this.createProduct(name, description, price);
  }

  createJuice() {
    const name = 'Juice';
    const description = 'A single juice bottle. Ask for the options.';
    const price = '$2.5';
    return this.createProduct(name, description, price);
  }

  loadBurgers() {
    const burgers = [];
    burgers.push(this.createH2('Burgers'));
    burgers.push(this.createCheeseburger());
    burgers.push(this.createXTudo());
    burgers.push(this.createOnionBurger());
    burgers.push(this.createchiliBurger());
    burgers.push(this.createButterBurger());
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
    const content = document.querySelector('#content');
    const menuContainer = this.createDiv();
    const h1 = this.createH1();
    const burgers = this.loadBurgers();
    const beverages = this.loadBeverages();
    // mix products in one array
    const products = burgers.concat(beverages);
    menuContainer.appendChild(h1);
    for (let product of products)
      menuContainer.appendChild(product);
    content.appendChild(menuContainer);
  }
}
