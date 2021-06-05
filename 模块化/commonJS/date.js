// 日期模块
const d = new Date();
let y = d.getFullYear();
let m = d.getMonth() + 1;
let day = d.getDate();

let str = `今天是：${y} 年 ${m} 月 ${day} 日 祝您儿童节快乐 ^_^`;

// 输出内容
module.exports = str;