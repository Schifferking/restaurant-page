(()=>{"use strict";(new class{content=document.querySelector("#content");createHeader(){return document.createElement("header")}createNav(){return document.createElement("nav")}createUl(){return document.createElement("ul")}createLi(e){const t=document.createElement("li");return this.addChildElementToElement(e,t),t}createButton(e){const t=document.createElement("button");return t.textContent=e,t}createList(){const e=this.createUl();return this.addChildElementToElement(this.createLi(this.createButton("home")),e),this.addChildElementToElement(this.createLi(this.createButton("menu")),e),this.addChildElementToElement(this.createLi(this.createButton("contact")),e),e}createHeadline(){const e=document.createElement("h1");return e.textContent="Have some hamburger, dude!",e}createParagraph(){const e=document.createElement("p");return e.textContent="Hello, and welcome to our restaurant. We have a variety of burgers to choose from; every ingredient is clean and fresh. And the place is filled with a kind atmosphere.",e}addChildElementToElement(e,t){void 0===t?this.content.appendChild(e):t.appendChild(e)}loadPage(){const e=this.createNav(),t=this.createHeader();this.addChildElementToElement(e),this.addChildElementToElement(this.createList(),e),this.addChildElementToElement(t),this.addChildElementToElement(this.createHeadline(),t),this.addChildElementToElement(this.createParagraph(),t)}}).loadPage()})();