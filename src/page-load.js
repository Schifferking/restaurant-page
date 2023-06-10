import './style.css';

export default class PageLoader {
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
    this.addChildElementToElement(this.createLi(this.createButton('Home')), ul);
    this.addChildElementToElement(this.createLi(this.createButton('Menu')), ul);
    this.addChildElementToElement(this.createLi(this.createButton('Contact')), ul);
    return ul;
  }

  createMain() {
    return document.createElement('main');
  }

  createHeadline() {
    const h1 = document.createElement('h1');
    h1.textContent = "Have some hamburger!";
    return h1;
  }

  createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;
    return p;
  }

  createLink(link, text) {
    const linkElement = document.createElement('a');
    linkElement.textContent = text;
    linkElement.href = link;
    return linkElement;
  }

  createDiv() {
    return document.createElement('div');
  }

  createFooter() {
    return document.createElement('footer');
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
    const restaurantDescription = 'Hello, and welcome to our restaurant. We have a variety of burgers to choose from; every ingredient is clean and fresh. And the place is filled with a kind atmosphere.';
    const homeContainer = this.createDiv();
    homeContainer.classList.add('home-container');
    this.addChildElementToElement(main);
    this.addChildElementToElement(this.createHeadline(), homeContainer);
    this.addChildElementToElement(this.createParagraph(restaurantDescription), homeContainer);
    this.addChildElementToElement(homeContainer, main);
  }

  loadFooter() {
    const hamburgerLink = 'https://www.freepik.com/free-vector/cheese-burger-cartoon-icon-illustration_11787888.htm#query=hamburguer&position=1&from_view=search&track=sph';
    const hamburgerText = 'Hamburger background by catalyststuff on Freepik';
    const footer = this.createFooter();
    this.addChildElementToElement(this.createLink(hamburgerLink, hamburgerText), footer);
    this.addChildElementToElement(footer);
  }

  loadPage() {
    this.loadHeader();
    this.loadMain();
    this.loadFooter();
  }
}
