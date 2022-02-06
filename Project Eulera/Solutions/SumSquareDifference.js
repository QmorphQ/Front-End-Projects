"use strict";
//====================================================
//----------------------------------------------------
//++++++
//+++
const F = (n) => {
    let sumOfSqrs = 0;
    let sumOfNums = 0;
    for (let i = 1; i <= n; i++){
        sumOfSqrs += Math.pow(i, 2);
        sumOfNums += i;
    }
    return Math.pow(sumOfNums, 2) - sumOfSqrs;
};
//====================================================
console.log(F(100))