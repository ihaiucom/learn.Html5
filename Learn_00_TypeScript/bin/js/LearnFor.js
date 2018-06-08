var LearnFor = /** @class */ (function () {
    function LearnFor() {
        var _this = this;
        setTimeout(function () {
            _this.Test6();
        }, 500);
    }
    LearnFor.prototype.Test6 = function () {
        // let pets = new Set(["Cat", "Dog", "Hamster"]);
        // pets["species"] = "mammals";
        // for (let pet in pets) {
        //     console.log(pet); // "species"
        // }
        // for (let pet of pets) {
        //     console.log(pet); // "Cat", "Dog", "Hamster"
        // }
    };
    LearnFor.prototype.Test5 = function () {
        var someArray = [100, "string", false];
        h1("for of");
        for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
            var entry = someArray_1[_i];
            log(entry); // 1, "string", false
        }
        h1("for in");
        for (var entry in someArray) {
            log(entry);
        }
        log("");
        log("");
        h1("this");
        for (var entry in this) {
            pre(entry);
        }
        var Size = /** @class */ (function () {
            function Size(numFeet) {
                this.hell = "hello";
            }
            Size.className2 = "Size";
            return Size;
        }());
        h1("Size class");
        for (var entry in Size) {
            pre(entry);
        }
        var size = new Size(10);
        h1("size obj");
        for (var entry in size) {
            pre(entry);
        }
    };
    LearnFor.prototype.Test1 = function () {
        var items = [10, 20, 30, 40, 50];
        items.forEach(function (item) {
            log(item);
        });
        items.forEach(function (item, index, array) {
            return log("item=" + item + ", index=" + index + ", array=" + array);
        }, this);
        items.forEach(function (item, index) {
            log("item=" + item + ", index=" + index);
        });
    };
    LearnFor.prototype.Test2 = function () {
        var Animal = /** @class */ (function () {
            function Animal(name, numFeet) {
            }
            return Animal;
        }());
        var Size = /** @class */ (function () {
            function Size(numFeet) {
            }
            return Size;
        }());
        var a;
        var s;
        a = s; //OK
        s = a; //OK
    };
    LearnFor.prototype.Test3 = function () {
        var x;
        var y;
        x = y; // okay, y matches structure of x
    };
    return LearnFor;
}());
new LearnFor();
//# sourceMappingURL=LearnFor.js.map