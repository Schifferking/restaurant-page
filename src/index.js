import PageLoader from './page-load.js';
import Menu from './menu.js';
import Contact from './contact.js';

const myPageLoader = new PageLoader();
myPageLoader.loadPage();
const myMenu = new Menu();
const myContact = new Contact();
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');
const content = document.querySelector('#content');

homeButton.addEventListener('click', () => {
  const homeContainer = document.querySelector('.home-container');
  if (homeContainer === null)
  {
    content.classList.add('full-height');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    main.remove();
    footer.remove();
    myPageLoader.loadMain();
    myPageLoader.loadFooter();
  }
});

menuButton.addEventListener('click', () => {
  const menuContainer = document.querySelector('.menu-container');
  if (menuContainer === null)
  {
    content.classList.remove('full-height');
    const pageContent = document.querySelector('#content > main > div');
    pageContent.remove();
    myMenu.loadMenu();
  }
});

contactButton.addEventListener('click', () => {
  const contactContainer = document.querySelector('.contact-container');
  if (contactContainer === null)
  {
    content.classList.remove('full-height');
    const pageContent = document.querySelector('#content > main > div');
    pageContent.remove();
    myContact.loadContact();
  }
});
