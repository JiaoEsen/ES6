"use strict";

// 日期模块
var d = new Date();
var y = d.getFullYear();
var m = d.getMonth() + 1;
var day = d.getDate();
var str = "\u4ECA\u5929\u662F\uFF1A".concat(y, " \u5E74 ").concat(m, " \u6708 ").concat(day, " \u65E5 \u795D\u60A8\u513F\u7AE5\u8282\u5FEB\u4E50 ^_^"); // 输出内容

module.exports = str;