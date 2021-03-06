// lodash curry
const { curry } = require('lodash')

function getSum(a, b, c) {
  return a + b + c
}

const curried = curry(getSum)

console.log(curried(1, 2, 3))
console.log(curried(1, 2)(3))
console.log(curried(1)(2)(3))
