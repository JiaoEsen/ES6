import {
    move
} from "./move.js";

class BaseSwiper {
    constructor(select, options) {
        this.wrap = document.querySelector(select);
        this.picList = this.wrap.firstElementChild;
        this.picListLis = this.picList.querySelectorAll('li');
        this.btnList = this.wrap.querySelector('.btnList');
        this.btnListLis = this.btnList.querySelectorAll('li');
        this.firstEl = this.picListLis[0].cloneNode(true);
        this.lastEl = this.picListLis[this.picListLis.length - 1].cloneNode(true);
        // 自动轮播间隔时间
        this.delay = options.delay || 1500;

        this.nextEl = this.wrap.querySelector(options.nextEl);
        this.prevEl = this.wrap.querySelector(options.prevEl);

        // 每次运动的宽度
        this.width = this.wrap.clientWidth;
        // 初始化下标
        this.index = 1;
        // 元素个数
        this.length = this.picList.children.length;
        console.log(this.index, this.length);
        this.picList.style.left = -(this.index * this.width) + 'px';
        this.nextEl.onclick = () => {
            this.next();
        }

        this.prevEl.onclick = () => {
            this.prev();
        }

        this.btnListLis.forEach((item, index) => {
            item.onclick = () => {
                this.index = index + 1;
                this.setMove();
            }
        });

        this.navD(0);
        // 是否开启自动轮播
        options.autoPlay && this.autoPlay();
        options.loop && this.loop();
    }
    next() {
        this.index++;
        if (this.index == this.length + 1) {
            console.log('超出');
            this.index = 1;
            this.picList.style.left = 0;
        }
        this.setMove();
    }

    prev() {
        this.index--;
        console.log(this.index);
        if (this.index == 0) {
            this.index = this.length;
            this.picList.style.left = -(this.index * this.width + this.width) + 'px';
        }
        this.setMove();
    }

    autoPlay() {
        setInterval(() => {
            this.next();
        }, this.delay);
    }

    navD(_index) {
        this.btnListLis.forEach(item => {
            item.classList.remove('active');
        });
        this.btnListLis[_index].classList.add('active');
    }

    setMove() {
        move(this.picList, {
            left: -(this.index * this.width)
        });
        this.navD(this.index - 1);
    }

    loop() {
        this.cloneEl();
    }

    cloneEl() {
        this.picList.appendChild(this.firstEl);
        this.picList.prepend(this.lastEl);
    }

}

export {
    BaseSwiper
}