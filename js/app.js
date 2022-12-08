'use strict';

// ******GLOBALS******

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeArray = [];
let hourlyTotals = [];

// *****DOM WINDOWS******

let myForm = document.getElementById('my-form');
let tableElem = document.getElementById('sales-table');
let totalElem = document.getElementsByClassName('totals');


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
    this.cookiesBought.push(cookies);
    cookiesTotal += cookies;
  }
  this.cookiesBought.push(cookiesTotal);
};

Store.prototype.render = function () {
  let rowElem = document.createElement('tr');
  tableElem.appendChild(rowElem);

  let storeElem = document.createElement('td');
  storeElem.innerText = this.name;
  rowElem.appendChild(storeElem);

  for (let i = 0; i < this.cookiesBought.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.innerText = this.cookiesBought[i];
    rowElem.appendChild(tdElem);
  }
};

// *******EXECUTABLE CODE******

function tableHours() {
  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let blankElem = document.createElement('th');
  blankElem.innerText = 'Stores';
  row1.appendChild(blankElem);

  for (let i = 0; i < hours.length; i++) {
    let headElem = document.createElement('th');
    headElem.innerText = hours[i];
    row1.appendChild(headElem);
  }

  let headerTotalElem = document.createElement('th');
  headerTotalElem.innerText = 'Daily Total';
  row1.appendChild(headerTotalElem);
}

function tableTotals() {
  let row1 = document.createElement('tr');
  row1.className = 'totals';
  tableElem.appendChild(row1);

  let blankElem = document.createElement('th');
  blankElem.innerText = 'Totals';
  row1.appendChild(blankElem);

  for (let i = 0; i < hourlyTotals.length; i++) {
    let headElem = document.createElement('th');
    headElem.innerText = hourlyTotals[i];
    row1.appendChild(headElem);
  }
}

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

function hourlyTotalCookies() {
  for (let i = 0; i <= hours.length; i++) {
    let hourlyCookies = 0;
    for (let j = 0; j < storeArray.length; j++) {
      hourlyCookies += storeArray[j].cookiesBought[i];
    }
    hourlyTotals.push(hourlyCookies);
  }
}

// attach event listener

myForm.addEventListener('submit', handleSubmit);   // executable code

// Define event handler

function handleSubmit(event){
  event.preventDefault();  // prevent default browser handling
  
  // TODO: grab info submitted in form
  
  let name = event.target.name.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let avgCookie = +event.target.avgCookie.value;

  let newStore = new Store(name, minCust, maxCust, avgCookie);
  // check to see if store name has been submitted
  let nameTest = storeArray.findIndex(x => x.name.toLowerCase() === name.toLowerCase());
  if(nameTest >= 0) {
    const removeElem = document.querySelector('tr:nth-child(' + (nameTest + 2) + ')');
    removeElem.remove();

    storeArray[nameTest].minCust = minCust;
    storeArray[nameTest].maxCust = maxCust;
    storeArray[nameTest].avgCookie = avgCookie;
    storeArray[nameTest].cookiesBought = [];

    const currentTotal = document.querySelector('tr:last-child');
    currentTotal.remove();

    storeArray[nameTest].getCookiesBought();
    storeArray[nameTest].render();

    hourlyTotals = [];
    hourlyTotalCookies();
    tableTotals();
  }
  if(nameTest === -1){
    // TODO: create new object using constructor
      
    const currentTotal = document.querySelector('tr:last-child');
    currentTotal.remove();
    // call render for new object
    storeArray.push(newStore);
    newStore.getCookiesBought();
    newStore.render();
      
    // myForm.reset();
    
    hourlyTotals = [];
    hourlyTotalCookies();
    tableTotals();
  }
}

tableHours();

renderAll();

hourlyTotalCookies();

tableTotals();

