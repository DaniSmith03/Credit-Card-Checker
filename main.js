// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [2, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

// function to convert a string of numbers into an array of numbers
const toArr = (card) => {
  let cardNum = [];
  for (let i = 0; i < card.length; i++) {
    cardNum.push(Number(card[i]));
  }
  console.log(cardNum);
  return cardNum;
};

//Function to validate credit card number prints out boolean
const validateCred = (arr) => {
  let checkArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr.length % 2 == 0) {
      if (i == arr.length - 1) {
        checkArr.push(arr[i]);
        //  console.log(`${arr[i]} is the first num`)
      } else if (i % 2 === 0) {
        arr[i] * 2 < 9
          ? checkArr.push(arr[i] * 2)
          : checkArr.push(arr[i] * 2 - 9);
        //  console.log(`${arr[i]} even index`)
      } else {
        checkArr.push(arr[i]);
        // console.log(`${arr[i]} odd index`)
      }
    } else {
      if (i == arr.length - 1) {
        checkArr.push(arr[i]);
        //  console.log(`${arr[i]} is the first num`)
      } else if (i % 2 !== 0) {
        arr[i] * 2 < 9
          ? checkArr.push(arr[i] * 2)
          : checkArr.push(arr[i] * 2 - 9);
        //  console.log(`${arr[i]} even index`)
      } else {
        checkArr.push(arr[i]);
        // console.log(`${arr[i]} odd index`)
      }
    }
  }
  //  console.log(checkArr)
  arrTotal = checkArr.reduce((acc, cv) => acc + cv);
  return arrTotal % 10 === 0 ? true : false;
};

console.log(validateCred(toArr('4929011044668546097')));

//function that takes an array of cards and gives back an array of bad cards
function findInvalidCards(cards) {
  let invalids = [];
  cards.forEach((card) => {
    validateCred(card) ? 'card is valid' : invalids.push(card);
  });
  // console.log(invalids)
  return invalids;
}

badCards = findInvalidCards(batch);

//function that tells which companies have send invalid cards from an arr of card numbers
const idInvalidCardCompanies = (cards) => {
  let companies = [];
  for (let i = 0; i < cards.length; i++) {
    if (cards[i][0] === 3) {
      companies.push('Amex (American Express)');
    } else if (cards[i][0] === 4) {
      companies.push('Visa');
    } else if (cards[i][0] === 5) {
      companies.push('Mastercard');
    } else if (cards[i][0] === 6) {
      companies.push('Discover');
    } else {
      companies.push('Company not found');
    }
  }
  // console.log(companies)
  return companies.filter((item, index) => companies.indexOf(item) === index);
};

console.log(idInvalidCardCompanies(badCards));
