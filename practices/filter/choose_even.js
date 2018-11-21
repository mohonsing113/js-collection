'use strict';

function choose_even(collection) {
  return collection.filter(a => a%2==0)
}

module.exports = choose_even;
