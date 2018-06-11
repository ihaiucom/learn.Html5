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
var LearnLH = /** @class */ (function () {
    function LearnLH() {
        var _this = this;
        setTimeout(function () {
            _this.Test9();
        }, 500);
    }
    LearnLH.prototype.Test10 = function () {
    };
    LearnLH.prototype.Test9 = function () {
        var person = {
            name: 'Jarid',
            age: 35
        };
    };
    LearnLH.prototype.Test8 = function () {
        var numbers = [65, 44, 12, 4];
        numbers.map(function (value, index, arr) {
            log("value=" + value + ", index=" + index + ", arr=" + arr);
        });
        numbers.map(function (n) { return log(n); });
        function pluck(o, names) {
            return names.map(function (n) { return o[n]; });
        }
        var person = {
            name: 'Jarid',
            age: 35
        };
        var strings = pluck(person, ['name']); // ok, string[]
        log(strings);
    };
    LearnLH.prototype.Test7 = function () {
        function pluck(o, names) {
            return names.map(function (n) { return o[n]; });
        }
    };
    LearnLH.prototype.Test6 = function () {
        var UIElement = /** @class */ (function () {
            function UIElement() {
            }
            UIElement.prototype.animate = function (dx, dy, easing) {
                if (easing === "ease-in") {
                    // ...
                }
                else if (easing === "ease-out") {
                }
                else if (easing === "ease-in-out") {
                }
                else {
                    // error! should not pass null or undefined.
                }
            };
            return UIElement;
        }());
        var button = new UIElement();
        button.animate(0, 0, "ease-in");
        // button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
    };
    LearnLH.prototype.Test5 = function () {
        var name = "1234";
        log(typeof name);
        var fun = function () {
            return "hello world";
        };
        fun();
    };
    LearnLH.prototype.Test4 = function () {
        var BasePadder = /** @class */ (function () {
            function BasePadder() {
            }
            return BasePadder;
        }());
        var SpaceRepeatingPadder = /** @class */ (function (_super) {
            __extends(SpaceRepeatingPadder, _super);
            function SpaceRepeatingPadder(numSpaces) {
                var _this = _super.call(this) || this;
                _this.numSpaces = numSpaces;
                return _this;
            }
            SpaceRepeatingPadder.prototype.getPaddingString = function () {
                return Array(this.numSpaces + 1).join(" ");
            };
            return SpaceRepeatingPadder;
        }(BasePadder));
        var StringPadder = /** @class */ (function () {
            function StringPadder(value) {
                this.value = value;
            }
            StringPadder.prototype.getPaddingString = function () {
                return this.value;
            };
            return StringPadder;
        }());
        function getRandomPadder() {
            // return Math.random() < 0.5 ?
            //     new SpaceRepeatingPadder(4) :
            // new StringPadder("  ");
            return new StringPadder("  ");
        }
        // 类型为SpaceRepeatingPadder | StringPadder
        var padder = getRandomPadder();
        if (padder instanceof SpaceRepeatingPadder) {
            padder; // 类型细化为'SpaceRepeatingPadder'
        }
        if (padder instanceof StringPadder) {
            padder; // 类型细化为'StringPadder'
        }
        log(padder instanceof BasePadder);
        log(padder instanceof SpaceRepeatingPadder);
        log(padder instanceof StringPadder);
        var str = "abc";
        var num = 123;
        var arr = [1, 2, 3];
        log(arr instanceof String);
        log(arr instanceof Array);
    };
    LearnLH.prototype.Test3 = function () {
        var SpaceRepeatingPadder = /** @class */ (function () {
            function SpaceRepeatingPadder(numSpaces) {
                this.numSpaces = numSpaces;
            }
            SpaceRepeatingPadder.prototype.getPaddingString = function () {
                return Array(this.numSpaces + 1).join(" ");
            };
            return SpaceRepeatingPadder;
        }());
        var StringPadder = /** @class */ (function () {
            function StringPadder(value) {
                this.value = value;
            }
            StringPadder.prototype.getPaddingString = function () {
                return this.value;
            };
            return StringPadder;
        }());
        function getRandomPadder() {
            return Math.random() < 0.5 ?
                new SpaceRepeatingPadder(4) :
                new StringPadder("  ");
        }
        // 类型为SpaceRepeatingPadder | StringPadder
        var padder = getRandomPadder();
        if (padder instanceof SpaceRepeatingPadder) {
            padder; // 类型细化为'SpaceRepeatingPadder'
        }
        if (padder instanceof StringPadder) {
            padder; // 类型细化为'StringPadder'
        }
    };
    LearnLH.prototype.Test2 = function () {
        function extend(first, second) {
            var result = {};
            for (var id in first) {
                result[id] = first[id];
            }
            for (var id in second) {
                if (!result.hasOwnProperty(id)) {
                    result[id] = second[id];
                }
            }
            return result;
        }
        function getSmallPet() {
            var r = Math.random();
            if (r > 0.5) {
                return { swim: function () { log("Fish swim"); }, layEggs: function () { log("Fish layEggs"); } };
            }
            else {
                return { fly: function () { log("Bird fly"); }, layEggs: function () { log("Bird layEggs"); } };
            }
        }
        function aisFish2(pet) {
            return pet.swim !== undefined;
        }
        function isBird(pet) {
            return pet.fly !== undefined;
        }
        h1("Fish | Bird");
        var pet = getSmallPet();
        pet.layEggs(); // okay
        // pet.swim();    // errors
        if (pet.swim) {
            pet.swim();
        }
        if (pet.fly) {
            pet.fly();
        }
        log("");
        if (aisFish2(pet)) {
            pet.swim();
        }
        else if (isBird(pet)) {
            pet.fly();
        }
        else {
            pet.aa();
        }
        h1("Bird & Fish");
        var fish = { swim: function () { log("Fish swim"); }, layEggs: function () { log("Fish layEggs"); } };
        var bird = { fly: function () { log("Bird fly"); }, layEggs: function () { log("Bird layEggs"); } };
        var p2 = extend(bird, fish);
        p2.fly();
        p2.layEggs();
        p2.swim();
    };
    LearnLH.prototype.Test1 = function () {
        function isNumber(x) {
            return typeof x == "number";
        }
        function isString(x) {
            return typeof x == "string";
        }
        function padLeft(value, padding) {
            if (isNumber(padding)) {
                return Array(padding + 1).join("-") + value;
            }
            if (isString(padding)) {
                return padding + value;
            }
            throw new Error("Expected string or number, got '" + padding + "'.");
        }
        function padLeft2(value, padding) {
            if (typeof padding === "number") {
                return Array(padding + 1).join(" ") + value;
            }
            if (typeof padding === "string") {
                return padding + value;
            }
            throw new Error("Expected string or number, got '" + padding + "'.");
        }
        log(padLeft("Hello world", 4)); // returns "    Hello world"
        log(padLeft("Hello world", "aaaaaaaaaaaa")); // returns "    Hello world"
        //    log(  padLeft("Hello world", true) ); // 编译阶段通过，运行时报错
    };
    return LearnLH;
}());
var LearnLH2 = /** @class */ (function (_super) {
    __extends(LearnLH2, _super);
    function LearnLH2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LearnLH2;
}(LearnLH));
new LearnLH();
//# sourceMappingURL=LearnLH.js.map