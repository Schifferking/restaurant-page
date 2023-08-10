import './style.css';

export default class PageLoader {
  content = document.querySelector('#content');

  static createHeader() {
    return document.createElement('header');
  }

  static createNav() {
    return document.createElement('nav');
  }

  static createUl() {
    return document.createElement('ul');
  }

  createLi(element) {
    const li = document.createElement('li');
    this.addChildElementToElement(element, li);
    return li;
  }

  static createButton(content) {
    const button = document.createElement('button');
    button.textContent = content;
    return button;
  }

  static createButtons() {
    const buttons = [];
    const homeButton = PageLoader.createButton('Home');
    homeButton.classList.add('home');
    const menuButton = PageLoader.createButton('Menu');
    menuButton.classList.add('menu');
    const contactButton = PageLoader.createButton('Contact');
    contactButton.classList.add('contact');
    buttons.push(homeButton);
    buttons.push(menuButton);
    buttons.push(contactButton);
    return buttons;
  }

  createList() {
    const ul = PageLoader.createUl();
    const buttons = PageLoader.createButtons();
    buttons.map(button => this.addChildElementToElement(this.createLi(button), ul));
    return ul;
  }

  static createMain() {
    return document.createElement('main');
  }

  static createHeadline() {
    const h1 = document.createElement('h1');
    h1.textContent = "Have some hamburger!";
    return h1;
  }

  static createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;
    return p;
  }

  static createLink(link, text) {
    const linkElement = document.createElement('a');
    linkElement.textContent = text;
    linkElement.href = link;
    return linkElement;
  }

  static createDiv() {
    return document.createElement('div');
  }

  static createFooter() {
    return document.createElement('footer');
  }

  createCreditsList() {
    const ul = PageLoader.createUl();
    const hamburgerLink = 'https://www.freepik.com/free-vector/cheese-burger-cartoon-icon-illustration_11787888.htm#query=hamburguer&position=1&from_view=search&track=sph';
    const hamburgerText = 'Hamburger background by catalyststuff on Freepik';
    const hamburgerIconLink = "https://www.flaticon.com/free-icons/burger";
    const hamburgerIconText = 'Hamburger icon by Pixel perfect on Flaticon';
    this.addChildElementToElement(this.createLi(PageLoader.createLink(hamburgerLink, hamburgerText)), ul);
    this.addChildElementToElement(this.createLi(PageLoader.createLink(hamburgerIconLink, hamburgerIconText)), ul);
    return ul;
  }

  addChildElementToElement(childElement, element) {
    if (element === undefined)
      this.content.appendChild(childElement);
    else
      element.appendChild(childElement);
  }

  loadNav() {
    const nav = PageLoader.createNav();
    this.addChildElementToElement(this.createList(), nav);
    return nav;
  }

  loadHeader() {
    const header = PageLoader.createHeader();
    this.addChildElementToElement(header);
    this.addChildElementToElement(this.loadNav(), header);
  }

  loadMain() {
    const main = PageLoader.createMain();
    const restaurantDescription = 'Hello, and welcome to our restaurant. We have a variety of burgers to choose from; every ingredient is clean and fresh. And the place is filled with a kind atmosphere.';
    const homeContainer = PageLoader.createDiv();
    homeContainer.classList.add('home-container');
    this.addChildElementToElement(main);
    this.addChildElementToElement(PageLoader.createHeadline(), homeContainer);
    this.addChildElementToElement(PageLoader.createParagraph(restaurantDescription), homeContainer);
    this.addChildElementToElement(homeContainer, main);
  }

  loadFooter() {
    const footer = PageLoader.createFooter();
    const creditsList = this.createCreditsList();
    this.addChildElementToElement(footer);
    this.addChildElementToElement(creditsList, footer);
  }

  loadPage() {
    this.content.classList.add('full-height');
    this.loadHeader();
    this.loadMain();
    this.loadFooter();
  }
}
