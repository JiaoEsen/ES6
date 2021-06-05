const d = new Date();
let y = d.getFullYear();
let m = d.getMonth() + 1;
let day = d.getDate();

let str = `今天是：${y} 年 ${m} 月 ${day} 日 祝您儿童节快乐 ^_^`;

class Base {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getSum() {
        return this.a + this.b;
    };
}
// 输出内容
export {
    str as s,Base
}