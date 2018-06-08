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
            _this.Test2();
        }, 500);
    }
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
        function isFish(pet) {
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
        if (isFish(pet)) {
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
        function padLeft(value, padding) {
            if (typeof padding === "number") {
                return Array(padding + 1).join("-") + value;
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