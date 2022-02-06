//=================================================
//-------------------------------------------------
//++++++
//+++
const specialPythagoreanTriplet = (n) => {
  let result = [];
  for (let c = 3; c < n; c++) {
    for (let b = 2; b < c; b++) {
      let a = Math.sqrt(c ** 2 - b ** 2);
      if (Number.isInteger(a) && a + b + c === n && result.filter(subArr => subArr[5] === c).length === 0) {
        result = [
          ...result,
          ["a: ", a, "b: ", b, "c: ", c, "a * b * c: ", a * b * c],
        ];
      } else continue;
    }
    
  }
  return result;
};
//=================================================
console.log(specialPythagoreanTriplet(1000));
//=================================================
//Export:
module.exports = specialPythagoreanTriplet;
