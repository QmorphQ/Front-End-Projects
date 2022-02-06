"use strict";
//=========================================
//-----------------------------------------
//+++++++
const F = (n) => {
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
  //+++++++
  const divideByFactors = (n, testPrimeNum = () => "test function") => {
    let result = {
      num: n,
      arrOfFactors: n === 1 ? [1] : [],
    };
    //+++
    for (let i = 2; i <= n; i++) {
      if (result.num === 1) {
        break;
      }
      if (result.num % i === 0 && testPrimeNum(i)) {
        result = {
          num: result.num / i,
          arrOfFactors: [...result.arrOfFactors, i],
        };
        i = 1;
      }
    }
    //+++
    return result.arrOfFactors;
  };
  //+++++++
  const findSmallestMultipleOfTwo = (
    a,
    b,
    findFactorsOfNum = () => {},
    testPrimeNum = () => {}
  ) => {
    let result = [
      findFactorsOfNum(a, testPrimeNum),
      findFactorsOfNum(b, testPrimeNum),
    ].sort((m, n) => m.length - n.length);
    //+++
    const findMultiplie = (k = [], l = []) => {
      let arr_1 = [...k],
        arr_2 = [...l];
      let result = [];
      arr_1.forEach((num, index) => {
        if (arr_2.includes(num)) {
          delete arr_1[index];
          delete arr_2[arr_2.findIndex((n) => n === num)];
        }
      });
      return [...arr_1.filter((a) => a !== undefined), ...l].reduce(
        (a, b) => a * b
      );
    };
    //+++
    return findMultiplie(...result);
  };
  //+++++++
  const findSmallestMultiplieInRange = (
    n,
    findMultipleOfTwo,
    findFactors,
    testPrime
  ) => {
    //   let processValue = (a, b) => findMultipleOfTwo(a, b, findFactors, testPrime);
    let resultArr = [];
    for (let i = 2; i <= n; i++) {
      resultArr.push(i);
    }
    return resultArr.reduce((acc, num) => {
      return (acc = findMultipleOfTwo(acc, num, findFactors, testPrime));
    });
  };
  return findSmallestMultiplieInRange(
    n,
    findSmallestMultipleOfTwo,
    divideByFactors,
    isItPrime
  );
};

//=========================================
console.log(F(20));
