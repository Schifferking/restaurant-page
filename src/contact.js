export default class Contact {
  createH1() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact';
    return h1;
  }

  createH2(content) {
    const h2 = document.createElement('h2');
    h2.textContent = content;
    return h2;
  }

  createDiv() {
    return document.createElement('div');
  }

  createMain() {
    return document.createElement('main');
  }

  createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;
    return p;
  }

  createPersonContact(name, position, phone, email) {
    const personDiv = this.createDiv();
    personDiv.appendChild(this.createH2(name));
    personDiv.appendChild(this.createParagraph(position));
    personDiv.appendChild(this.createParagraph(phone));
    personDiv.appendChild(this.createParagraph(email));
    return personDiv;
  }

  createManager() {
    const name = 'John Doe';
    const position = 'Manager';
    const phone = '123-456-7890';
    const email = 'JohnDoe@RealNoFake.com';
    return this.createPersonContact(name, position, phone, email);
  }

  createChef() {
    const name = 'Rick Oak';
    const position = 'Chef';
    const phone = '234-567-8901';
    const email = 'RickOak@RealNoFake.com';
    return this.createPersonContact(name, position, phone, email);
  }

  createWaiter() {
    const name = 'Joe Steel';
    const position = 'Waiter';
    const phone = '345-678-9012';
    const email = 'JoeSteel@RealNoFake.com';
    return this.createPersonContact(name, position, phone, email);
  }

  createCM() {
    const name = 'Tom Olive';
    const position = 'Community Manager';
    const phone = '456-789-0123';
    const email = 'TomOlive@RealNoFake.com';
    return this.createPersonContact(name, position, phone, email);
  }

  loadPeople() {
    let people = [];
    people.push(this.createH1())
    people.push(this.createManager());
    people.push(this.createChef());
    people.push(this.createWaiter());
    people.push(this.createCM());
    return people;
  }

  loadContact() {
    const main = document.querySelector('main');
    const contactContainer = this.createDiv();
    contactContainer.classList.add('contact-container');
    const people = this.loadPeople();
    for (let person of people)
      contactContainer.appendChild(person);
    main.appendChild(contactContainer);
  }
}
