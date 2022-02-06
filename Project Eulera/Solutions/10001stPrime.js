"use strict";
//===========================================
const F = (n) => {
  let countOfPrimes = n;
  let i = 1;
  const isItPrime = (n) => {
    let result = true;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return (result = false);
      } else {
        continue;
      }
    }
    return result;
  };
 for (let i = 1; i < 104750; i += 1){
     if(i !== 1 && isItPrime(i)){
        --countOfPrimes;
     };
     if (countOfPrimes === 0) {
         return i
     } else {
         continue
     }
 }
};
//===========================================
console.log("F: " ,F(6));
//===========================================
//Export:
module.exports = F;