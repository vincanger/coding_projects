const { quotes } = require('./data');

const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const createElement = (queryArguments) => {
  if (queryArguments.hasOwnProperty('quote') &&
      queryArguments.hasOwnProperty('person')) {
    return {
      'id': `${generateId()}`,
      'quote': queryArguments.quote,
      'person':  queryArguments.person,
    };
  } else {
    return false;
  }
};

const generateId = () => {
  const ids = quotes.map(quote => Number(quote.id));
  let newId = 1;
  while (newId === ids.find(id => id === newId)) {
    newId++;
  }
  return newId;
};

module.exports = {
  getRandomElement, createElement, generateId
};
