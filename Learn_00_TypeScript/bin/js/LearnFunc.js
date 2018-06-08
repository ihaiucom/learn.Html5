var LearnFunc = /** @class */ (function () {
    function LearnFunc() {
        var _this = this;
        this.myclaseName = "LearnFunc";
        setTimeout(function () {
            _this.Test9();
        }, 500);
    }
    LearnFunc.prototype.Test9 = function () {
        var Point = /** @class */ (function () {
            function Point(x, y) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                this.x = x;
                this.y = y;
            }
            return Point;
        }());
        var Player = /** @class */ (function () {
            function Player() {
            }
            Player.prototype.move = function (x) {
                log("move typeof " + typeof x + " ");
                if (x instanceof Point) {
                }
                else if (x instanceof Array) {
                }
                else {
                }
            };
            return Player;
        }());
        var player = new Player();
        player.move(10, 10);
        player.move(new Point(20, 20));
        player.move([new Point(1, 1), new Point(2, 2), new Point(3, 3)]);
    };
    LearnFunc.prototype.Test8 = function () {
        var suits = ["hearts", "spades", "clubs", "diamonds"];
        function pickCard(x) {
            // Check to see if we're working with an object/array
            // if so, they gave us the deck and we'll pick the card
            if (typeof x == "object") {
                var pickedCard = Math.floor(Math.random() * x.length);
                return pickedCard;
            }
            // Otherwise just let them pick the card
            else if (typeof x == "number") {
                var pickedSuit = Math.floor(x / 13);
                return { suit: suits[pickedSuit], card: x % 13 };
            }
        }
        var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
        var pickedCard1 = myDeck[pickCard(myDeck)];
        alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
        var pickedCard2 = pickCard(15);
        alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
    };
    LearnFunc.prototype.Test7 = function () {
        var suits = ["hearts", "spades", "clubs", "diamonds"];
        function pickCard(x) {
            // Check to see if we're working with an object/array
            // if so, they gave us the deck and we'll pick the card
            if (typeof x == "object") {
                var pickedCard = Math.floor(Math.random() * x.length);
                return pickedCard;
            }
            // Otherwise just let them pick the card
            else if (typeof x == "number") {
                var pickedSuit = Math.floor(x / 13);
                return { suit: suits[pickedSuit], card: x % 13 };
            }
        }
        var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
        var pickedCard1 = myDeck[pickCard(myDeck)];
        alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
        var pickedCard2 = pickCard(15);
        alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
    };
    LearnFunc.prototype.Test6 = function () {
        // Define the original function.
        var checkNumericRange = function (value) {
            if (typeof value !== 'number')
                return false;
            else
                return value >= this.minimum && value <= this.maximum;
        };
        // The range object will become the this value in the callback function.
        var range = { minimum: 10, maximum: 20 };
        // Bind the checkNumericRange function.
        var boundCheckNumericRange = checkNumericRange.bind(range);
        // Use the new function to check whether 12 is in the numeric range.
        var result = boundCheckNumericRange(12);
        document.write(result);
    };
    LearnFunc.prototype.Test5 = function () {
        this.Test4["name"] = "LearnFunc.Test5";
        this.Test4["myname"] = "LearnFunc.Test5";
        var uiElement = {
            addClickListener: function (onclick, obj) {
                var event = new Event("HelloEvent");
                onclick(event);
            }
        };
        uiElement.addClickListener["name"] = "UIElement.addClickListener";
        uiElement.addClickListener["myname"] = "UIElement.addClickListener";
        var Handler = /** @class */ (function () {
            function Handler() {
                var _this = this;
                this.info = "Hello Handle";
                this.onClickBad = function (e) {
                    _this.info = e.type;
                    log("clicked!");
                };
                this.onClickBad["name"] = " Handler.onClickBad";
                this.onClickBad["myname"] = " Handler.onClickBad";
                this.onClickBad = this.onClickBad.bind(this);
            }
            return Handler;
        }());
        var h = new Handler();
        uiElement.addClickListener(h.onClickBad);
    };
    LearnFunc.prototype.Test4 = function () {
        this.Test4["name"] = "LearnFunc.Test4";
        this.Test4["myname"] = "LearnFunc.Test4";
        var uiElement = {
            addClickListener: function (onclick, obj) {
                var a = onclick["constructor"];
                log("addClickListener caller:" + this.addClickListener.caller.toString());
                log("addClickListener arguments.callee:" + arguments.callee);
                log("addClickListener onclick=" + onclick);
                var event = new Event("HelloEvent");
                if (obj) {
                    obj.onClickBad(event);
                }
                else {
                    onclick.apply(obj, [event]);
                }
            }
        };
        var cc = uiElement["constructor"];
        log(uiElement["constructor"]);
        cc = uiElement.addClickListener["constructor"];
        log(uiElement.addClickListener["constructor"]);
        log(uiElement.addClickListener.length);
        uiElement.addClickListener["name"] = "UIElement.addClickListener";
        uiElement.addClickListener["myname"] = "UIElement.addClickListener";
        var Handler = /** @class */ (function () {
            function Handler() {
                var _this = this;
                this.onClickBad = function (e) {
                    // oops, used this here. using this callback would crash at runtime
                    _this.info = e.type;
                    log("clicked!");
                };
                this.onClickBad["name"] = " Handler.onClickBad";
                this.onClickBad["myname"] = " Handler.onClickBad";
            }
            return Handler;
        }());
        var h = new Handler();
        cc = h["constructor"];
        log(h["constructor"]);
        uiElement.addClickListener(h.onClickBad, h); // error!
        uiElement.addClickListener(h.onClickBad); // error!
    };
    LearnFunc.prototype.Test3 = function () {
        var player = {
            username: "zengfeng",
            password: "123",
            login: function () {
                log("login:" + this.username);
                var mthis = this;
                return function () {
                    log("login func:" + mthis.username);
                    return { username: mthis.username, password: mthis.password };
                };
            },
            login2: function () {
                var _this = this;
                log("login2:" + this.username);
                return function () {
                    log("login2 func:" + _this.username);
                    return { username: _this.username, password: _this.password };
                };
            }
        };
        h1("login");
        var login = player.login();
        var result = login();
        log(result);
        h1("login2");
        login = player.login2();
        result = login();
        log(result);
    };
    LearnFunc.prototype.Test2 = function () {
        function build(cmd, input, output) {
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            return cmd + " --input=" + input + " --output=" + output + " --args=" + args.join();
        }
        var result = build("protoc", "hello.proto", "hello.ts", "a", "b", "c", 1, 2, 3);
        log(result);
    };
    LearnFunc.prototype.Test1 = function () {
        var _this = this;
        h1("\u4E66\u5199\u5B8C\u6574\u51FD\u6570\u7C7B\u578B");
        var add = function (x, y) {
            log(this.myclaseName);
            return x + y;
        };
        var mul;
        mul = function (x, y) {
            log(_this.myclaseName);
            return x * y;
        };
        var result = add(10, 5);
        log(result);
        result = mul(10, 5);
        log(result);
    };
    return LearnFunc;
}());
new LearnFunc();
//# sourceMappingURL=LearnFunc.js.map