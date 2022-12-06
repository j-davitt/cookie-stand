'use strict';

// ******GLOBALS******

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// *****DOM WINDOWS******

let locationSection = document.getElementById('location-data');

// ******HELPER FUNCTIONS / UTILITIES******

function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



// ******OBJECT LITERALS******

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cookiesBought: [],
  getCookiesBought: function () {
    let cookiesTotal = 0;
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
      this.cookiesBought.push(hours[i] + ': ' + cookies + ' cookies');
      cookiesTotal += cookies;
    }
    this.cookiesBought.push('Total: ' + cookiesTotal + ' cookies');
  },
  render: function () {
    // ******DOM MANIPULATION******

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
  }
};


let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  cookiesBought: [],
  getCookiesBought: function () {
    let cookiesTotal = 0;
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
      this.cookiesBought.push(hours[i] + ': ' + cookies + ' cookies');
      cookiesTotal += cookies;
    }
    this.cookiesBought.push('Total: ' + cookiesTotal + ' cookies');
  },
  render: function () {
    // ******DOM MANIPULATION******

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
  }
};



let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  cookiesBought: [],
  getCookiesBought: function () {
    let cookiesTotal = 0;
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
      this.cookiesBought.push(hours[i] + ': ' + cookies + ' cookies');
      cookiesTotal += cookies;
    }
    this.cookiesBought.push('Total: ' + cookiesTotal + ' cookies');
  },
  render: function () {
    // ******DOM MANIPULATION******

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
  }
};



let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  cookiesBought: [],
  getCookiesBought: function () {
    let cookiesTotal = 0;
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
      this.cookiesBought.push(hours[i] + ': ' + cookies + ' cookies');
      cookiesTotal += cookies;
    }
    this.cookiesBought.push('Total: ' + cookiesTotal + ' cookies');
  },
  render: function () {
    // ******DOM MANIPULATION******

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
  }
};



let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  cookiesBought: [],
  getCookiesBought: function () {
    let cookiesTotal = 0;
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
      this.cookiesBought.push(hours[i] + ': ' + cookies + ' cookies');
      cookiesTotal += cookies;
    }
    this.cookiesBought.push('Total: ' + cookiesTotal + ' cookies');
  },
  render: function () {
    // ******DOM MANIPULATION******

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
  }
};

// *******EXECUTABLE CODE******

seattle.getCookiesBought();
seattle.render();
tokyo.getCookiesBought();
tokyo.render();
dubai.getCookiesBought();
dubai.render();
paris.getCookiesBought();
paris.render();
lima.getCookiesBought();
lima.render();
