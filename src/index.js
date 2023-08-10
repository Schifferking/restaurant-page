import PageLoader from './page-load';
import Menu from './menu';
import Contact from './contact';

const myPageLoader = new PageLoader();
myPageLoader.loadPage();
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
    main.classList.remove('full-width');
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
    const main = document.querySelector('main');
    main.classList.remove('full-width');
    const pageContent = document.querySelector('#content > main > div');
    content.classList.remove('full-height');
    pageContent.remove();
    Menu.loadMenu();
  }
});

contactButton.addEventListener('click', () => {
  const contactContainer = document.querySelector('.contact-container');
  if (contactContainer === null)
  {
    const pageContent = document.querySelector('#content > main > div');
    const main = document.querySelector('main');
    main.classList.add('full-width');
    content.classList.remove('full-height');
    pageContent.remove();
    Contact.loadContact();
  }
});
