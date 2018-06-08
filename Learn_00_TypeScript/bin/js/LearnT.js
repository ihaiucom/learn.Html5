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
var LearnT = /** @class */ (function () {
    function LearnT() {
        var _this = this;
        setTimeout(function () {
            _this.Test11();
        }, 500);
    }
    LearnT.prototype.Test11 = function () {
        var HeroCtrl = /** @class */ (function () {
            function HeroCtrl() {
            }
            return HeroCtrl;
        }());
        var SoliderCtrl = /** @class */ (function () {
            function SoliderCtrl() {
            }
            return SoliderCtrl;
        }());
        var Unit = /** @class */ (function () {
            function Unit() {
            }
            return Unit;
        }());
        var Hero = /** @class */ (function (_super) {
            __extends(Hero, _super);
            function Hero() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Hero;
        }(Unit));
        var Solider = /** @class */ (function (_super) {
            __extends(Solider, _super);
            function Solider() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Solider;
        }(Unit));
        function findCtrl(unit) {
            return unit.ctrl;
        }
        function findClassCtrl(unit) {
            return unit.prototype.ctrl;
        }
        var hero = new Hero();
        var solider = new Solider();
        findCtrl(hero).heroName;
        findCtrl(solider).soliderName;
        findClassCtrl(Hero).heroName;
        findClassCtrl(Solider).soliderName;
    };
    LearnT.prototype.Test10 = function () {
        function create(c) {
            var v = new c();
            v.charAt(2);
            return v;
        }
        var Player = /** @class */ (function () {
            function Player() {
            }
            Player.prototype.charAt = function (pos) {
                return "Player";
            };
            return Player;
        }());
        var p = create(Player);
        var s = create(String);
    };
    LearnT.prototype.Test9 = function () {
        // interface Findable<T>
        // {
        //     [key:number] : T;
        //     [key:string] : T;
        // }
        // function find<T, U extends Findable<T>>(n: T, s: U)
        // {
        // }
        // let giraffe = "a";
        // let myAnimals:Findable<string> = {a: "aaa", b: "bbb"};
        // find (giraffe, myAnimals);
        // interface Dict
        // {
        //     [propName:string] : any;
        // }
        function getProperty(obj, key) {
            return obj[key];
        }
        // let x = { a: 1, b: 2, c: 3, d: 4 };
        // log( getProperty(x, "a") ); // okay
        // log( getProperty(x, "m") ); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
    };
    LearnT.prototype.Test8 = function () {
        function outLength(arg) {
            log(arg.length);
            return arg;
        }
        log(outLength("abcdefg"));
        log(outLength([1, 2, 3, 4, "a", "b"]));
        log(outLength({ length: 100, value: true }));
    };
    LearnT.prototype.Test7 = function () {
        var GenericNumber = /** @class */ (function () {
            function GenericNumber() {
            }
            return GenericNumber;
        }());
        var myGenericNumber = new GenericNumber();
        myGenericNumber.zeroValue = 0;
        myGenericNumber.add = function (x, y) { return x + y; };
        log(myGenericNumber.add(10, 5));
        var stringGeneric = new GenericNumber();
        stringGeneric.zeroValue = "";
        stringGeneric.add = function (x, y) { return x + y; };
        log(stringGeneric.add("10", "5"));
    };
    LearnT.prototype.Test6 = function () {
        function identity(arg) {
            return arg;
        }
        var stringIndentity = identity;
        var numberIndentity = identity;
        var str = stringIndentity("abc");
        log(str);
        var num = numberIndentity(12345);
        log(num);
    };
    LearnT.prototype.Test5 = function () {
        function identity(arg) {
            return arg;
        }
        var myIdentity = identity;
        var str = myIdentity("abc");
        log(str);
    };
    LearnT.prototype.Test4 = function () {
        function identity(arg) {
            return arg;
        }
        var myIdentity = identity;
        var str = myIdentity("abc");
        log(str);
    };
    LearnT.prototype.Test3 = function () {
        function getLength(arg) {
            log(arg.length);
            return arg;
        }
        var ouLength = getLength;
        log(ouLength("abc"));
        log(ouLength([1, 2, 3]));
    };
    LearnT.prototype.Test2 = function () {
        function getLength(arg) {
            log(arg.length);
            return arg;
        }
        var arr = getLength([1, 2, 3]);
    };
    LearnT.prototype.Test1 = function () {
        function identity(arg) {
            return arg;
        }
        var str = identity("a");
        var num = identity(2);
        var str2 = identity("a");
        var num2 = identity(2);
    };
    return LearnT;
}());
new LearnT();
//# sourceMappingURL=LearnT.js.map