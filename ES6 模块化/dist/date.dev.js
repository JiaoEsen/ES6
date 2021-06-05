"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = exports.s = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var d = new Date();
var y = d.getFullYear();
var m = d.getMonth() + 1;
var day = d.getDate();
var str = "\u4ECA\u5929\u662F\uFF1A".concat(y, " \u5E74 ").concat(m, " \u6708 ").concat(day, " \u65E5 \u795D\u60A8\u513F\u7AE5\u8282\u5FEB\u4E50 ^_^");
exports.s = str;

var Base =
/*#__PURE__*/
function () {
  function Base(a, b) {
    _classCallCheck(this, Base);

    this.a = a;
    this.b = b;
  }

  _createClass(Base, [{
    key: "getSum",
    value: function getSum() {
      return this.a + this.b;
    }
  }]);

  return Base;
}(); // 输出内容


exports.Base = Base;