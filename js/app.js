'use strict';

// ******GLOBALS******

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeArray = [];

// *****DOM WINDOWS******

let locationSection = document.getElementById('location-data');
let tableSection = document.getElementById('sales-table');

// ******HELPER FUNCTIONS / UTILITIES******

function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ******CONSTRUCTORS******

function Store(a, b, c, d) {
  this.name = a;
  this.minCust = b;
  this.maxCust = c;
  this.avgCookie = d;
  this.cookiesBought = [];
}

// ******PROTOTYPES******

Store.prototype.getCookiesBought = function () {
  let cookiesTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
    this.cookiesBought.push(hours[i] + ': ' + cookies + ' cookies');
    cookiesTotal += cookies;
  }
  this.cookiesBought.push('Total: ' + cookiesTotal + ' cookies');
};

Store.prototype.render = function () {
  let articleElem = document.createElement('article');
  locationSection.appendChild(articleElem);

  let h3Elem = document.createElement('h3');
  h3Elem.innerText = this.name;
  articleElem.appendChild(h3Elem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for (let i = 0; i < this.cookiesBought.length; i++) {
    let liElem = document.createElement('li');
    liElem.innerText = this.cookiesBought[i];
    ulElem.appendChild(liElem);
  }
};

// *******EXECUTABLE CODE******

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

// push new objects in array for storage
storeArray.push(seattle, tokyo, dubai, paris, lima);

function renderAll() {
  for (let i = 0; i < storeArray.length; i++) {
    storeArray[i].getCookiesBought();
    storeArray[i].render();
  }
}

renderAll();

// seattle.getCookiesBought();
// seattle.render();
// tokyo.getCookiesBought();
// tokyo.render();
// dubai.getCookiesBought();
// dubai.render();
// paris.getCookiesBought();
// paris.render();
// lima.getCookiesBought();
// lima.render();



// ******OBJECT LITERALS******

// Might want to try to get the number as a for loop and do the string concat as a seperate loop. cookiesBought would only contain the number for each hour and not the full string.
// Assign a total in the object. in the loop this.total += cookies
// `${hours[i]}: ${this.cookiesBought[i]} cookies` for creating the elements with DOM manipulation.

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   cookiesBought: [],
//   getCookiesBought: function () {
//     let cookiesTotal = 0;
//     for (let i = 0; i < hours.length; i++) {
//       let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
//       this.cookiesBought.push(hours[i] + ': ' + cookies + ' cookies');
//       cookiesTotal += cookies;
//     }
//     this.cookiesBought.push('Total: ' + cookiesTotal + ' cookies');
//   },
//   render: function () {
//     // ******DOM MANIPULATION******

//     let articleElem = document.createElement('article');
//     locationSection.appendChild(articleElem);

//     let h3Elem = document.createElement('h3');
//     h3Elem.innerText = this.name;
//     articleElem.appendChild(h3Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesBought.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.innerText = this.cookiesBought[i];
//       ulElem.appendChild(liElem);
//     }
//   }
// };


// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   cookiesBought: [],
//   getCookiesBought: function () {
//     let cookiesTotal = 0;
//     for (let i = 0; i < hours.length; i++) {
//       let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
//       this.cookiesBought.push(hours[i] + ': ' + cookies + ' cookies');
//       cookiesTotal += cookies;
//     }
//     this.cookiesBought.push('Total: ' + cookiesTotal + ' cookies');
//   },
//   render: function () {
//     // ******DOM MANIPULATION******

//     let articleElem = document.createElement('article');
//     locationSection.appendChild(articleElem);

//     let h3Elem = document.createElement('h3');
//     h3Elem.innerText = this.name;
//     articleElem.appendChild(h3Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesBought.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.innerText = this.cookiesBought[i];
//       ulElem.appendChild(liElem);
//     }
//   }
// };



// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   cookiesBought: [],
//   getCookiesBought: function () {
//     let cookiesTotal = 0;
//     for (let i = 0; i < hours.length; i++) {
//       let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
//       this.cookiesBought.push(hours[i] + ': ' + cookies + ' cookies');
//       cookiesTotal += cookies;
//     }
//     this.cookiesBought.push('Total: ' + cookiesTotal + ' cookies');
//   },
//   render: function () {
//     // ******DOM MANIPULATION******

//     let articleElem = document.createElement('article');
//     locationSection.appendChild(articleElem);

//     let h3Elem = document.createElement('h3');
//     h3Elem.innerText = this.name;
//     articleElem.appendChild(h3Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesBought.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.innerText = this.cookiesBought[i];
//       ulElem.appendChild(liElem);
//     }
//   }
// };



// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   cookiesBought: [],
//   getCookiesBought: function () {
//     let cookiesTotal = 0;
//     for (let i = 0; i < hours.length; i++) {
//       let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
//       this.cookiesBought.push(hours[i] + ': ' + cookies + ' cookies');
//       cookiesTotal += cookies;
//     }
//     this.cookiesBought.push('Total: ' + cookiesTotal + ' cookies');
//   },
//   render: function () {
//     // ******DOM MANIPULATION******

//     let articleElem = document.createElement('article');
//     locationSection.appendChild(articleElem);

//     let h3Elem = document.createElement('h3');
//     h3Elem.innerText = this.name;
//     articleElem.appendChild(h3Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesBought.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.innerText = this.cookiesBought[i];
//       ulElem.appendChild(liElem);
//     }
//   }
// };



// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   cookiesBought: [],
//   getCookiesBought: function () {
//     let cookiesTotal = 0;
//     for (let i = 0; i < hours.length; i++) {
//       let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
//       this.cookiesBought.push(hours[i] + ': ' + cookies + ' cookies');
//       cookiesTotal += cookies;
//     }
//     this.cookiesBought.push('Total: ' + cookiesTotal + ' cookies');
//   },
//   render: function () {
//     // ******DOM MANIPULATION******

//     let articleElem = document.createElement('article');
//     locationSection.appendChild(articleElem);

//     let h3Elem = document.createElement('h3');
//     h3Elem.innerText = this.name;
//     articleElem.appendChild(h3Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesBought.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.innerText = this.cookiesBought[i];
//       ulElem.appendChild(liElem);
//     }
//   }
// };

