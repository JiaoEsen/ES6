"use strict";

// 入口文件
// 加载日期模块
var s = require('./date'); // let obj = require('./math');


var _require = require('./math'),
    getRandom = _require.getRandom,
    getSum = _require.getSum;

console.log(s);
console.log("------------");

for (var i = 0; i < 5; i++) {
  var result = getRandom(10, 50);
  console.log("\u7B2C".concat(i, "\u7EC4\uFF1A").concat(result));
}

console.log("------------");
var sum = getSum(5, 18);
console.log("\u6C42\u548C\u7ED3\u679C\uFF1A".concat(sum));
/* 
while (true) {
    console.log(1);
}; */