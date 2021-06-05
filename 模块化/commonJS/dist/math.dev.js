"use strict";

function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
} // 求和


function getSum(a, b) {
  return a + b;
} // 输出方法


module.exports = {
  getRandom: getRandom,
  getSum: getSum
};