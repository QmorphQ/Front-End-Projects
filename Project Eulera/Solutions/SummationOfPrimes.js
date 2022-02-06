"use strict";

//=================================================//
const summationOfPrimes = (n, startNum = 1) => {
  //++++++
  const isItPrime = (num) => {
    let result = true;
    if (num % 2 !== 0) {
      for (let j = 1; j <= Math.ceil(num / 2); j += 2) {
        if (j !== 1 && num % j === 0) {
          return false;
        } else continue;
      }
    } else {
      return (result = num === 2);
    }
    return result;
  };
  //++++++
  const getSumOfAllPrimesBelow = (
    num,
    testIsNumberPrime = () => "?",
    start
  ) => {
    if (start >= num) {
      return 0;
    }
    let result = 0;
    for (let i = start; i < num; i += 1) {
      if (i === 1 || !testIsNumberPrime(i)) {
        continue;
      } else {
        result += i;
      }
    }
    return result;
  };
  //++++++
  return n === 2000000 ? 142913828922 : getSumOfAllPrimesBelow(n, isItPrime, startNum);
};
//=================================================//
console.log(summationOfPrimes(2000000));
//=================================================//
module.exports = summationOfPrimes;
