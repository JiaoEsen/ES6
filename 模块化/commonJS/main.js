// 入口文件
// 加载日期模块
let s = require('./date');
// let obj = require('./math');
let {getRandom,getSum}  = require('./math');

console.log(s);
console.log(`------------`);

for (let i = 0; i < 5; i++) {
    let result = getRandom(10, 50);
    console.log(`第${i}组：${result}`);
}

console.log(`------------`);
let sum = getSum(5,18);
console.log(`求和结果：${sum}`);
/* 
while (true) {
    console.log(1);
}; */