"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseSwiper = void 0;

var _move = require("./move.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseSwiper =
/*#__PURE__*/
function () {
  function BaseSwiper(select, options) {
    var _this = this;

    _classCallCheck(this, BaseSwiper);

    this.wrap = document.querySelector(select);
    this.picList = this.wrap.firstElementChild;
    this.picListLis = this.picList.querySelectorAll('li');
    this.btnList = this.wrap.querySelector('.btnList');
    this.btnListLis = this.btnList.querySelectorAll('li');
    this.firstEl = this.picListLis[0].cloneNode(true);
    this.lastEl = this.picListLis[this.picListLis.length - 1].cloneNode(true); // 自动轮播间隔时间

    this.delay = options.delay || 1500;
    this.nextEl = this.wrap.querySelector(options.nextEl);
    this.prevEl = this.wrap.querySelector(options.prevEl); // 每次运动的宽度

    this.width = this.wrap.clientWidth; // 初始化下标

    this.index = 1; // 元素个数

    this.length = this.picList.children.length;
    console.log(this.index, this.length);
    this.picList.style.left = -(this.index * this.width) + 'px';

    this.nextEl.onclick = function () {
      _this.next();
    };

    this.prevEl.onclick = function () {
      _this.prev();
    };

    this.btnListLis.forEach(function (item, index) {
      item.onclick = function () {
        _this.index = index + 1;

        _this.setMove();
      };
    });
    this.navD(0); // 是否开启自动轮播

    options.autoPlay && this.autoPlay();
    options.loop && this.loop();
  }

  _createClass(BaseSwiper, [{
    key: "next",
    value: function next() {
      this.index++;

      if (this.index == this.length + 1) {
        console.log('超出');
        this.index = 1;
        this.picList.style.left = 0;
      }

      this.setMove();
    }
  }, {
    key: "prev",
    value: function prev() {
      this.index--;
      console.log(this.index);

      if (this.index == 0) {
        this.index = this.length;
        this.picList.style.left = -(this.index * this.width + this.width) + 'px';
      }

      this.setMove();
    }
  }, {
    key: "autoPlay",
    value: function autoPlay() {
      var _this2 = this;

      setInterval(function () {
        _this2.next();
      }, this.delay);
    }
  }, {
    key: "navD",
    value: function navD(_index) {
      this.btnListLis.forEach(function (item) {
        item.classList.remove('active');
      });

      this.btnListLis[_index].classList.add('active');
    }
  }, {
    key: "setMove",
    value: function setMove() {
      (0, _move.move)(this.picList, {
        left: -(this.index * this.width)
      });
      this.navD(this.index - 1);
    }
  }, {
    key: "loop",
    value: function loop() {
      this.cloneEl();
    }
  }, {
    key: "cloneEl",
    value: function cloneEl() {
      this.picList.appendChild(this.firstEl);
      this.picList.prepend(this.lastEl);
    }
  }]);

  return BaseSwiper;
}();

exports.BaseSwiper = BaseSwiper;