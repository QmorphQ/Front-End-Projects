const F = require('../Solutions/10001stPrime.js');
//-------------------------------------------------
//Test:
test("The 6th prime should be 13", () => {
    expect(F(6)).toBe(13);
});
//=================================================
const findLargestPolindromeFrom = require('../Solutions/LargestPolindromeProduct.js');
//-------------------------------------------------
//Test:
test(`Largest polindrome of product of two 2-digits mumbers is "9009"`, () => {
  expect(findLargestPolindromeFrom(2)).toBe(9009);
});
//=================================================
 const largeProductionInASeries = require("../Solutions/LargestProductInASeries.js");
//-------------------------------------------------
//Test:
test("Largest production in a series of 4 adjacent digits should be 5832", () => {
  expect(largeProductionInASeries(4)).toBe(5832);
});
//=================================================
const specialPythagoreanTriplet = require("../Solutions/SpecialPythagoreanTriplet.js");
//-------------------------------------------------
//Test:
test("For n === 24 should return 480", () => {
  expect(specialPythagoreanTriplet(24)[0][7]).toBe(480);
});
//=================================================
const SummationOfPrimes = require("../Solutions/SummationOfPrimes.js");
//-------------------------------------------------
//Test:
test.only("Sums of primes below 17 should be 41", () => {
  expect(SummationOfPrimes(17)).toBe(41);
});
//=================================================