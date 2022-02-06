"use strict";

//===================================================
function findLargestPolindromeFrom(num) {
  //Functions:
  const divideStrOnEqualParts = str => {
    return str.length % 2 === 0
      ? [str.slice(0, str.length / 2), str.slice(str.length / 2)]
      : [str.slice(0, (str.length - 1) / 2), str.slice((str.length + 1) / 2)];
  };
  //++++++++++
  const compareTwoPartsOfStr = (pair = ["abc", "cba"]) => {
    return pair[0] !== ""
      ? pair[0] ===
          pair[1]
            .split("")
            .reverse()
            .join("")
      : false;
  };
  //++++++++++
  const isItPolindrome = n => {
    const str = n.toString();
    return compareTwoPartsOfStr(divideStrOnEqualParts(str));
  };
  //++++++++++
  const findLargestPolindrome = (
    n /*n-digit*/,
    testFunc = () => "test" /*func to test product of numbers*/
  ) => {
    const largestPolindrom = {
      "pair of numbers": [0, 0],
      product: 0
    };
    if (Number.isInteger(n) && n >= 1) {
      let exp = 10 ** (n - 1);
      let startNum = n === 1 ? exp + 1 : exp;
      //+++++++
      for (let i = 10 ** n - 1; i >= startNum; i--) {
        //+++++++
        for (let j = 10 ** n - 1; j >= startNum; j--) {
          let currentProduct = i * j;
          if (testFunc(currentProduct)) {
            largestPolindrom.product < currentProduct
              ? ((largestPolindrom["pair of numbers"] = [i, j]),
                (largestPolindrom.product = currentProduct))
              : largestPolindrom;
          }
        }
        //+++++++
      }
      //+++++++
    }
    return (
      largestPolindrom.product ||
      console.log("No any polindroms for this condition")
    );
  };
  //-------------------------
  return findLargestPolindrome(num, isItPolindrome);
};
//===================================================
console.log(findLargestPolindromeFrom(3));
//===================================================
//Export:
module.exports = findLargestPolindromeFrom;
