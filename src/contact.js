export default class Contact {
  static createH1() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact';
    return h1;
  }

  static createH2(content) {
    const h2 = document.createElement('h2');
    h2.textContent = content;
    return h2;
  }

  static createDiv() {
    return document.createElement('div');
  }

  static createMain() {
    return document.createElement('main');
  }

  static createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;
    return p;
  }

  static createPersonContact(name, position, phone, email) {
    const personDiv = Contact.createDiv();
    personDiv.classList.add('person-container');
    personDiv.appendChild(Contact.createH2(name));
    personDiv.appendChild(Contact.createParagraph(position));
    personDiv.appendChild(Contact.createParagraph(phone));
    personDiv.appendChild(Contact.createParagraph(email));
    return personDiv;
  }

  static createManager() {
    const name = 'John Doe';
    const position = 'Manager';
    const phone = '123-456-7890';
    const email = 'JohnDoe@RealNoFake.com';
    return Contact.createPersonContact(name, position, phone, email);
  }

  static createChef() {
    const name = 'Rick Oak';
    const position = 'Chef';
    const phone = '234-567-8901';
    const email = 'RickOak@RealNoFake.com';
    return Contact.createPersonContact(name, position, phone, email);
  }

  static createWaiter() {
    const name = 'Joe Steel';
    const position = 'Waiter';
    const phone = '345-678-9012';
    const email = 'JoeSteel@RealNoFake.com';
    return Contact.createPersonContact(name, position, phone, email);
  }

  static createCM() {
    const name = 'Tom Olive';
    const position = 'Community Manager';
    const phone = '456-789-0123';
    const email = 'TomOlive@RealNoFake.com';
    return Contact.createPersonContact(name, position, phone, email);
  }

  static loadPeople() {
    const people = [];
    people.push(Contact.createH1())
    people.push(Contact.createManager());
    people.push(Contact.createChef());
    people.push(Contact.createWaiter());
    people.push(Contact.createCM());
    return people;
  }

  static loadContact() {
    const main = document.querySelector('main');
    const contactContainer = Contact.createDiv();
    contactContainer.classList.add('contact-container');
    const people = Contact.loadPeople();
    people.map(person => {
      contactContainer.appendChild(person);
      main.appendChild(contactContainer);
      return main;
    });
    main.appendChild(contactContainer);
  }
}
