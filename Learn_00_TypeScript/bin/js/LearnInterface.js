var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LearnInterface = /** @class */ (function () {
    function LearnInterface() {
        var _this = this;
        setTimeout(function () {
            _this.Test16();
        }, 500);
    }
    LearnInterface.prototype.Test16 = function () {
        var Control = /** @class */ (function () {
            function Control(id, name, state) {
                this.id = id;
                this.nodeName = name;
                this.state = state;
            }
            Control.prototype.privateMethod = function () {
                log("Control.privateMethod: this=" + JSON.stringify(this));
            };
            Control.prototype.protectedMethod = function () {
                log("Control.protectedMethod: this=" + JSON.stringify(this));
            };
            Control.prototype.publicMethod = function () {
                log("Control.protectedMethod: this=" + JSON.stringify(this));
            };
            Control.prototype.myMethod = function () {
                log("Control.myMethod: this=" + JSON.stringify(this));
            };
            Control.prototype.getState = function () {
                log("Control.getState: this=" + JSON.stringify(this));
                return this.state;
            };
            return Control;
        }());
        var Button = /** @class */ (function (_super) {
            __extends(Button, _super);
            function Button() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Button.prototype.select = function () {
                log("Button.select: this=" + JSON.stringify(this));
            };
            Button.prototype.getState = function () {
                log("Button.getState: this=" + JSON.stringify(this));
                return _super.prototype.getState.call(this);
            };
            return Button;
        }(Control));
        var button = new Button(1, "Button-OK", "up");
        log(button);
        button.select();
        button.publicMethod();
        log(button.getState());
    };
    LearnInterface.prototype.Test15 = function () {
        h1("混合类型");
        function getCounter() {
            var counter = function (start) {
                log("Set Start: " + start);
                return "Set Start: " + start;
            };
            counter.interval = 123;
            counter.reset = function () {
                log("reset");
            };
            return counter;
        }
        var c = getCounter();
        log(c);
        var v = c(10);
        log("v=" + v);
        log(c);
        c.reset();
        c.interval = 5.0;
        log(c);
        log(typeof (c));
        log(typeof c);
        log(c);
    };
    LearnInterface.prototype.Test14 = function () {
        var square = {};
        log(square);
        square.color = "blue";
        square.sideLength = 10;
        square.penWidth = 5.0;
        log(square);
    };
    LearnInterface.prototype.Test13 = function () {
        function createClock(ctor, hour, minute) {
            log("createClock: ctor.GetType()= " + ctor.GetType());
            return new ctor(hour, minute);
        }
        var DigitalClock = /** @class */ (function () {
            function DigitalClock(h, m) {
            }
            DigitalClock.prototype.tick = function () {
                console.log("beep beep");
            };
            DigitalClock.GetType = function () {
                return "DigitalClock";
            };
            return DigitalClock;
        }());
        var AnalogClock = /** @class */ (function () {
            function AnalogClock(h, m) {
            }
            AnalogClock.prototype.tick = function () {
                console.log("tick tock");
            };
            AnalogClock.GetType = function () {
                return "AnalogClock";
            };
            return AnalogClock;
        }());
        var digital = createClock(DigitalClock, 12, 17);
        var analog = createClock(AnalogClock, 7, 32);
        digital.tick();
        analog.tick();
    };
    LearnInterface.prototype.Test12 = function () {
        var Clock = /** @class */ (function () {
            function Clock(h, m) {
                this.h = h;
                this.m = m;
            }
            Clock.prototype.setTime = function (d) {
                this.currentTime = d;
            };
            return Clock;
        }());
        var clock = new Clock(11, 20);
        log(clock);
        var c = clock;
        c.setTime(new Date());
        log(clock);
        log(c);
    };
    LearnInterface.prototype.Test11 = function () {
        var Animal = /** @class */ (function () {
            function Animal() {
            }
            return Animal;
        }());
        var Dog = /** @class */ (function (_super) {
            __extends(Dog, _super);
            function Dog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Dog;
        }(Animal));
        // interface AnimalDict
        // {
        //     [x: number] : Animal;
        //     [x: string] : Dog;
        // }
    };
    LearnInterface.prototype.Test10 = function () {
        var arr = ["zf", "ihaiu", "zhm"];
        var dict = { laya: "Laya", html: "html" };
        for (var i = 0; i < arr.length; i++) {
            dict[i] = arr[i];
            dict[arr[i]] = arr[i];
        }
        log(typeof ("123"));
        log(typeof (1));
        log(typeof (arr));
        log(typeof (dict));
        log(arr);
        log(dict);
    };
    LearnInterface.prototype.Test9 = function () {
        var arr = ["zf", "ihaiu", "zhm"];
        var name = arr[0];
        arr[10] = "a";
        arr[11] = "b";
        log(arr);
        log(name);
        log(arr[10]);
        log(arr["10"]);
        log("");
        log("null == null,   " + (null == null));
        log("null == void 0,   " + (null == void 0));
        log("null == undefined,   " + (null == undefined));
        log("");
        log("void 0 == void 0,   " + (void 0 == void 0));
        log("void 0 == undefined,   " + (void 0 == undefined));
        log("");
        log("undefined == undefined,   " + (undefined == undefined));
        log("");
        log("");
        log("");
        log("null === null,   " + (null === null));
        log("null === void 0,   " + (null === void 0));
        log("null === undefined,   " + (null === undefined));
        log("");
        log("void 0 === void 0,   " + (void 0 === void 0));
        log("void 0 === undefined,   " + (void 0 === undefined));
        log("");
        log("undefined === undefined,   " + (undefined === undefined));
        log("");
    };
    LearnInterface.prototype.Test8 = function () {
        var OnClick = function (node) {
            log("OnClick node:" + node);
        };
        function run(node, callback) {
            if (callback) {
                callback(node);
            }
            else {
                error("run callback=" + callback);
            }
        }
        run("Button-Ok", OnClick);
        run("Button-Ok", null);
    };
    LearnInterface.prototype.Test7 = function () {
        var serach = function (src, key) {
            var result = src.search(key);
            return result > -1;
        };
        var result = serach("Hello World My Name Is Zeng Feng", "m");
        log("result= " + result);
    };
    LearnInterface.prototype.Test6 = function () {
        function createSquare(config) {
            var square = { color: "white", area: 100 };
            if (config.color) {
                square.color = config.color;
            }
            else {
                log("no set color: config.color= " + config.color);
            }
            if (config.width) {
                square.area = config.width * config.width;
            }
            else {
                log("no set width: config.width = " + config.width);
            }
            return square;
        }
        var square = createSquare({ color: "black" });
        log("square.color = " + square.color);
        log("square.area = " + square.area);
        log("");
        square = createSquare({ colr: "red", width: 5, x: 1, y: 2 });
        log("square.color = " + square.color);
        log("square.area = " + square.area);
        log("");
    };
    LearnInterface.prototype.Test5 = function () {
        var arr = [1, 2, 3, 4, 5];
        var ro = arr;
        arr[0] = 11;
        arr.push(10);
        // ro[0] = 101;
        // ro.push(100);
        // arr = ro;
        log(arr["push"]);
        log(ro["push"]);
        ro["push"](1000);
        arr = ro;
        arr = ro;
        arr = ro;
        log("arr=" + arr);
        log("ro=" + ro);
    };
    LearnInterface.prototype.Test4 = function () {
        var p = { x: 10, y: 10 };
        // p.x = 100;
        // p.z = 200;
        p.x = 100;
        p.z = 300;
        log("p.x = " + p.x);
        log("p.y = " + p.y);
        // log(`p.z = ${p.z}`);
        log("p.z = " + p.z);
    };
    LearnInterface.prototype.Test3 = function () {
        function createSquare(config) {
            var square = { color: "white", area: 100 };
            if (config.color) {
                square.color = config.color;
            }
            else {
                log("no set color: config.color= " + config.color);
            }
            if (config.width) {
                square.area = config.width * config.width;
            }
            else {
                log("no set width: config.width = " + config.width);
            }
            return square;
        }
        var square = createSquare({ color: "black" });
        log("square.color = " + square.color);
        log("square.area = " + square.area);
        log("");
        square = createSquare({ colr: "red", width: 5, x: 1, y: 2 });
        log("square.color = " + square.color);
        log("square.area = " + square.area);
        log("");
    };
    LearnInterface.prototype.Test2 = function () {
        function printPlayer(player) {
            log("player.name = " + player.name);
        }
        var user = { name: "zf", qq: 593705098 };
        printPlayer(user);
    };
    LearnInterface.prototype.Test1 = function () {
        h1("接口初探");
        function printLabel(labelObj) {
            log("labelObj = " + labelObj + " ");
            log("labelObj.label = " + labelObj.label + " ");
            log("");
        }
        var obj = { size: 10, label: "Size 10 object" };
        printLabel(obj);
    };
    return LearnInterface;
}());
new LearnInterface();
//# sourceMappingURL=LearnInterface.js.map