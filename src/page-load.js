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

  createButtons() {
    let buttons = [];
    const homeButton = this.createButton('Home');
    homeButton.classList.add('home');
    const menuButton = this.createButton('Menu');
    menuButton.classList.add('menu');
    const contactButton = this.createButton('Contact');
    contactButton.classList.add('contact');
    buttons.push(homeButton);
    buttons.push(menuButton);
    buttons.push(contactButton);
    return buttons;
  }

  createList() {
    const ul = this.createUl();
    const buttons = this.createButtons();
    for (let button of buttons)
      this.addChildElementToElement(this.createLi(button), ul);
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

  createCreditsList() {
    const ul = this.createUl();
    const hamburgerLink = 'https://www.freepik.com/free-vector/cheese-burger-cartoon-icon-illustration_11787888.htm#query=hamburguer&position=1&from_view=search&track=sph';
    const hamburgerText = 'Hamburger background by catalyststuff on Freepik';
    const hamburgerIconLink = "https://www.flaticon.com/free-icons/burger";
    const hamburgerIconText = 'Hamburger icon by Pixel perfect on Flaticon';
    this.addChildElementToElement(this.createLi(this.createLink(hamburgerLink, hamburgerText)), ul);
    this.addChildElementToElement(this.createLi(this.createLink(hamburgerIconLink, hamburgerIconText)), ul);
    return ul;
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
    const footer = this.createFooter();
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
