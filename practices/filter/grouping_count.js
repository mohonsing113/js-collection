'use strict';

function grouping_count(collection) {
  return collection.reduce((item, key) => {
    item[key] = item[key] ? item[key] + 1 : 1;
    return item;
  }, Object.create(null));

  // var items ={}
  // for(var elm = 0; elm< collection.length;elm++){
  //   var key = collection[elm].toString()
  //   if(isNaN(items[key])){
  //     items[key]=1
  //   }else{
  //     items[key]++
  //   }
  // }
  // return items
}


module.exports = grouping_count;
