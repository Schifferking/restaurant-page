import './style.css';

export default class pageLoader {
  content = document.querySelector('#content');

  createHeader() {
    return document.createElement('header');
  }

  createNav() {
    return document.createElement('nav');
  }

  createUl() {
    return document.createElement('ul');
  }

  createLi(element) {
    const li = document.createElement('li');
    this.addChildElementToElement(element, li);
    return li;
  }

  createButton(content) {
    const button = document.createElement('button');
    button.textContent = content;
    return button;
  }

  createList() {
    const ul = this.createUl();
    this.addChildElementToElement(this.createLi(this.createButton('home')), ul);
    this.addChildElementToElement(this.createLi(this.createButton('menu')), ul);
    this.addChildElementToElement(this.createLi(this.createButton('contact')), ul);
    return ul;
  }

  createMain() {
    return document.createElement('main');
  }

  createHeadline() {
    const h1 = document.createElement('h1');
    h1.textContent = "Have some hamburger, dude!";
    return h1;
  }

  createParagraph() {
    const p = document.createElement('p');
    p.textContent = 'Hello, and welcome to our restaurant. We have a variety of burgers to choose from; every ingredient is clean and fresh. And the place is filled with a kind atmosphere.';
    return p;
  }

  addChildElementToElement(childElement, element) {
    if (element === undefined)
      this.content.appendChild(childElement);
    else
      element.appendChild(childElement);
  }

  loadNav() {
    const nav = this.createNav();
    this.addChildElementToElement(this.createList(), nav);
    return nav;
  }

  loadHeader() {
    const header = this.createHeader();
    this.addChildElementToElement(header);
    this.addChildElementToElement(this.loadNav(), header);
  }

  loadMain() {
    const main = this.createMain();
    this.addChildElementToElement(main);
    this.addChildElementToElement(this.createHeadline(), main);
    this.addChildElementToElement(this.createParagraph(), main);
  }

  loadPage() {
    this.loadHeader();
    this.loadMain();
  }
}
