var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var WebGL = Laya.WebGL;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        var _this = this;
        this.myname = "爱海游";
        Laya.init(600, 400, WebGL);
        setTimeout(function () { _this.TestZK2(); }, 500);
        var txt = new Laya.Text();
        //设置文本内容
        txt.text = "Hello Layabox";
        //设置文本颜色为白色，默认颜色为黑色
        txt.color = "#ffffff";
        txt.fontSize = 60;
        txt.bgColor = "#ff0000";
        txt.stroke = 5; //描边为5像素
        txt.strokeColor = "#FFFFFF";
        txt.pos(60, 100);
        txt.on(Laya.Event.CLICK, this, this.TestVar);
        Laya.stage.addChild(txt);
        Laya.stage.bgColor = '#23238E';
    }
    GameMain.prototype.TestLog = function () {
        h1("测试日志");
        log("hello");
        node("//哈哈");
        pre("var a = 1;");
    };
    GameMain.prototype.TestZK2 = function () {
        var user = { username: "zengfeng", password: "123",
            login: function () {
                log("login: username= " + this.username);
            }
        };
        user.login();
        var payer = { name: "曾峰", age: 18, qq: 593705098 };
        var role = __assign({}, user, payer, { roleId: 100 });
        log("role.username= " + role.username);
        role = __assign({}, user, payer, { roleId: 100, username: "zf" });
        log("role.username= " + role.username);
        role.login();
        role = __assign({ username: "zhm" }, user, payer, { roleId: 100 });
        log("role.username= " + role.username);
    };
    GameMain.prototype.TestZK1 = function () {
        var arrA = [1, 2];
        var arrB = [3, 4, 5];
        var arrC = [0].concat(arrA, arrB, [6]);
        log("arrA= " + arrA);
        log("arrB= " + arrB);
        log("arrC= " + arrC);
        log("");
        function f() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            log("args= " + args + "  length=" + args.length);
            log("arguments= " + arguments);
            log("");
        }
        f(1, 2, 3);
        f(arrC);
        var player = {
            id: 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            host: undefined
        };
        f(player);
    };
    GameMain.prototype.TestObjJG10 = function () {
        // 传进去的整个对象是 undefined才有效, 传null会报错
        function f(_a) {
            if (_a === void 0) { _a = { name: "zf", host: "zf.com" }; }
            var name = _a.name, host = _a.host, other = __rest(_a, ["name", "host"]);
            log("name=" + name);
            log("host=" + host);
            log("");
        }
        var player = {
            id: 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            host: undefined
        };
        f(player);
        player.name = "ihaiu";
        player.host = "ihaiu.com";
        f(player);
        player.name = null;
        player.host = null;
        f(player);
        player.name = undefined;
        player.host = undefined;
        f(player);
        f(undefined);
        // f(null);//传null会报错
    };
    GameMain.prototype.TestObjJG9 = function () {
        function f(name, host) {
            if (host === void 0) { host = "zengfeng75.com"; }
            var other = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                other[_i - 2] = arguments[_i];
            }
            log("name=" + name);
            log("host=" + host);
            log("");
        }
        var player = {
            id: 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            host: undefined
        };
        f(player);
        player.name = "ihaiu";
        player.host = "ihaiu.com";
        f(player);
    };
    GameMain.prototype.TestObjJG8 = function () {
        function f(_a) {
            var name = _a.name, _b = _a.host, host = _b === void 0 ? "zengfeng75.com" : _b, other = __rest(_a, ["name", "host"]);
            log("name=" + name);
            log("host=" + host);
            log("");
        }
        var player = {
            id: 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            host: undefined
        };
        f(player);
        player.name = "ihaiu";
        player.host = "ihaiu.com";
        f(player);
    };
    GameMain.prototype.TestObjJG7 = function () {
        function f(_a) {
            var name = _a.name, _b = _a.host, host = _b === void 0 ? "zengfeng75.com" : _b;
            log("name=" + name);
            log("host=" + host);
            log("");
        }
        var player = {
            id: 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            host: undefined
        };
        f(player);
        player.name = "ihaiu";
        player.host = "ihaiu.com";
        f(player);
    };
    GameMain.prototype.TestObjJG6 = function () {
        var player = {
            id: 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            host: void 0
        };
        function f(info) {
            var name = info.name, _a = info.qq, qq = _a === void 0 ? 1001 : _a;
            log("name=" + name);
            log("qq=" + qq);
            log("");
        }
        f(player);
        var myname = player.name, _a = player.host, host = _a === void 0 ? "ihaiu.com" : _a;
        log("player.host=" + player.host);
        log("myname=" + myname);
        log("host=" + host);
        log("");
    };
    GameMain.prototype.TestObjJG5 = function () {
        var player = {
            id: 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            qq: 593705098
        };
        var myUid = player.id, myEmail = player.email, age = player.age, other = __rest(player, ["id", "email", "age"]);
        log("player=" + player);
        log("");
        log("myUid=" + myUid);
        log("myEmail=" + myEmail);
        log("age=" + age);
        log("other=" + other);
    };
    GameMain.prototype.TestObjJG4 = function () {
        var player = {
            id: 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            qq: 593705098
        };
        var id = player.id, email = player.email, age = player.age, other = __rest(player, ["id", "email", "age"]);
        log("player=" + player);
        log("");
        log("id=" + id);
        log("email=" + email);
        log("age=" + age);
        log("other=" + other);
    };
    GameMain.prototype.TestObjJG3 = function () {
        var a, b;
        (_a = { a: "baz", b: 101 }, a = _a.a, b = _a.b);
        log("a=" + a);
        log("b=" + b);
        var _a;
    };
    GameMain.prototype.TestObjJG2 = function () {
        var o = {
            a: "foo",
            b: 12,
            c: "bar"
        };
        o[0] = 1;
        o[1] = 2;
        var _a = o, a = _a[0], b = _a[1];
        log("o=" + o);
        log("");
        log("a=" + a);
        log("b=" + b);
    };
    GameMain.prototype.TestObjJG1 = function () {
        var o = {
            a: "foo",
            b: 12,
            c: "bar"
        };
        var a = o.a, b = o.b;
        log("o=" + o);
        log("");
        log("a=" + a);
        log("b=" + b);
    };
    GameMain.prototype.TestJG6 = function () {
        var first = [1, 2, 3, 4][0];
        log("first=" + first);
        log("");
        var _a = [1, 2, 3, 4, 5, 6, 8, 9], second = _a[1], fourth = _a[4], other = _a.slice(5);
        log("second=" + second);
        log("fourth=" + fourth);
        log("other=" + other);
    };
    GameMain.prototype.TestJG5 = function () {
        var a, b, c;
        _a = [1, 2, 3, 4, 5], a = _a[0], b = _a[1], c = _a.slice(2);
        log("a=" + a);
        log("b=" + b);
        log("c=" + c);
        log("");
        _b = ["a", "b", "c"], a = _b[0], b = _b[1], c = _b.slice(2);
        log("a=" + a);
        log("b=" + b);
        log("c=" + c);
        log("");
        var _a, _b;
    };
    GameMain.prototype.TestJG4 = function () {
        var a, b, c;
        _a = [], a = _a[0], b = _a.slice(1);
        // a=undefined
        // b=
        log("a=" + a);
        log("b=" + b);
        log("");
        // a=1
        // b=2,3,4,5
        _b = [1, 2, 3, 4, 5], a = _b[0], b = _b.slice(1);
        log("a=" + a);
        log("b=" + b);
        log("");
        // a=zengfeng
        // b=男,18
        _c = ["zengfeng", "男", 18], a = _c[0], b = _c.slice(1);
        log("a=" + a);
        log("b=" + b);
        log("");
        _d = [1, 2, 3, 4, 5], a = _d[0], b = _d[1], c = _d.slice(2);
        log("a=" + a);
        log("b=" + b);
        log("c=" + c);
        log("");
        var _a, _b, _c, _d;
    };
    GameMain.prototype.TestJG3 = function () {
        var info = ["zengfeng", "男", 18];
        var arr = ["zengfeng", "男", 18];
        var name = info[0], sex = info[1], age = info[2];
        var n = arr[0], s = arr[1], a = arr[2];
        log("name=" + name);
        log("sex=" + sex);
        log("age=" + age);
        log("");
        log("n=" + n);
        log("s=" + s);
        log("a=" + a);
    };
    GameMain.prototype.TestJG2 = function () {
        var info = ["zengfeng", "男", 18];
        function f(_a) {
            var name = _a[0], sex = _a[1], age = _a[2];
            log("name=" + name);
            log("sex=" + sex);
            log("age=" + age);
        }
        f(info);
    };
    GameMain.prototype.TestJG1 = function () {
        var input = [1, 2, "zengfeng"];
        var first = input[0], second = input[1], name = input[2];
        log(first);
        log(second);
        log(name);
        //交互变量
        h1("交互变量");
        _a = [second, first], first = _a[0], second = _a[1];
        log(first);
        log(second);
        var _a;
    };
    GameMain.prototype.TestConst2 = function () {
        var Player = {
            id: 1,
            name: "zengfeng",
            age: 18
        };
        // Player = {
        //     id : 1,
        //     name: "zengfeng",
        //     level: 5
        // }
        Player.name = "ihaiu";
        Player.age = 20;
        log(Player);
    };
    GameMain.prototype.TestConst1 = function () {
        var NUM_1 = 100;
        log(NUM_1);
    };
    GameMain.prototype.TestLet8 = function () {
        var _loop_1 = function (i) {
            setTimeout(function () {
                console.log(i);
            }, 100 * i);
        };
        for (var i = 0; i < 10; i++) {
            _loop_1(i);
        }
        function theCityThatAlwaysSleeps() {
            var getCity;
            if (true) {
                var city_1 = "Seattle";
                getCity = function () {
                    return city_1;
                };
            }
            return getCity();
        }
        log(theCityThatAlwaysSleeps());
    };
    GameMain.prototype.TestLet7 = function () {
        function sumMatrix(matrix) {
            var sum = 0;
            for (var i = 0; i < matrix.length; i++) {
                log("~~i=" + i);
                var row = matrix[i];
                for (var i_1 = 0; i_1 < row.length; i_1++) {
                    log("row i=" + i_1);
                    sum += row[i_1];
                }
                log("##i=" + i);
            }
            // log(`@@i=${i}`)
            return sum;
        }
        var m = [
            [11, 12, 13],
            [21, 22, 23],
            [31, 32, 33],
            [41, 42, 43],
        ];
        log("sum = " + sumMatrix(m));
    };
    GameMain.prototype.TestLet6 = function () {
        var _this = this;
        window["myname"] = "Window全局的";
        log(this.myname);
        function f1() {
            log("f1: " + this.myname);
        }
        var f2 = function () {
            log("f2: " + this.myname);
        };
        var f3 = function () {
            log("f3: " + _this.myname);
        };
        f1();
        f2();
        f3();
    };
    GameMain.prototype.TestLet5 = function () {
        var a = 1;
        var a = 1;
        function f() {
            var a = 100;
        }
        function m(x) {
            var x;
        }
        function g() {
            var y = 1;
            var y = 2;
        }
        // 并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明。
        function ff(condition, x) {
            if (condition) {
                var x_1 = 100;
                return x_1;
            }
            return x;
        }
        ff(false, 0); // returns 0
        ff(true, 0); // returns 100
    };
    GameMain.prototype.TestLet4 = function () {
        function f() {
            return a;
        }
        log(f());
        var a = 10;
    };
    GameMain.prototype.TestLet3 = function () {
        var a = 1;
        function f(input) {
            a = 100; // 这里的a 将是闭包定义的 var a=1, 将会对上面进行修改
            if (input) {
                var a_1 = 10;
            }
            log("f a=" + a); // 100. 这里的也是上面定义的 var a=1
        }
        f(true);
        log(a); // a =100, 被f函数修改
    };
    GameMain.prototype.TestLet2 = function () {
        var a = 1;
        function f(input) {
            // illegal to use 'a' before it's declared;
            a = 100;
            var a;
            log("f a=" + a);
        }
        f(true);
        log(a);
    };
    GameMain.prototype.TestLet1 = function () {
        function f(input) {
            var a = 100;
            if (input) {
                var b = a + 1;
                return b;
            }
            // Error: 'b' doesn't exist here
            // return b;
        }
        log("f(true) // " + f(true));
        log("f(false) // " + f(false));
    };
    GameMain.prototype.TestVar5 = function () {
        // for(let i = 0; i < 10; i ++)
        // {
        //     setTimeout(function() {
        //         log(i);
        //     }, 100 * i);
        // }
        function f() {
            for (var i = 0; i < 10; i++) {
                (function (val) {
                    setTimeout(function () {
                        log(val);
                    }, 100 * val);
                })(i);
            }
        }
        f();
    };
    GameMain.prototype.TestVar4 = function () {
        var a = 1;
        var a = 2;
        var a = 100;
        log(a);
        function sumMatrix(matrix, isIn) {
            if (isIn === void 0) { isIn = false; }
            sum = 100;
            log("--sum=" + sum);
            if (isIn)
                var sum = 0;
            log("--sum=" + sum);
            for (var i = 0; i < matrix.length; i++) {
                log("~~i=" + i);
                var row = matrix[i];
                for (var i = 0; i < row.length; i++) {
                    log("row i=" + i);
                    sum += row[i];
                }
                log("##i=" + i);
            }
            log("@@i=" + i);
            return sum;
        }
        var m = [
            [11, 12, 13],
            [21, 22, 23],
            [31, 32, 33],
            [41, 42, 43],
        ];
        log("sum = " + sumMatrix(m));
    };
    GameMain.prototype.TestVar3 = function () {
        var x = 1;
        var haha = "haha 1";
        function f(isIn) {
            log("haha=" + haha);
            if (isIn) {
                var x = 10;
            }
            var haha = "haha";
            return x;
        }
        var x = 100;
        log("f(true); // " + f(true));
        log("f(false); // " + f(false));
    };
    GameMain.prototype.TestVar2 = function () {
        h1("Test");
        function f() {
            var a = 1;
            a = 2;
            var b = g();
            a = 3;
            return b;
            function g() {
                return a;
            }
        }
        log("f(); // " + f());
    };
    GameMain.prototype.TestVar = function () {
        var a = 10;
        log(a);
        function f() {
            var message = "Hello World";
            return message;
        }
        function f2() {
            var a = 100;
            return function g() {
                var b = a + 1;
                return b;
            };
        }
        log(a);
        log(f());
        var gg = f2();
        log(a);
        log("gg() = " + gg() + " ");
        log(a);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map