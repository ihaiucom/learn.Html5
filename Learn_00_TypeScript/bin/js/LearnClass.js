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
var LearnClass = /** @class */ (function () {
    function LearnClass() {
        var _this = this;
        setTimeout(function () {
            _this.Test7();
        }, 500);
    }
    LearnClass.prototype.Test7 = function () {
        var Animal = /** @class */ (function () {
            function Animal() {
            }
            Animal.prototype.move = function () {
                console.log('roaming the earch...');
            };
            return Animal;
        }());
        var ForeLegAnimal = /** @class */ (function (_super) {
            __extends(ForeLegAnimal, _super);
            function ForeLegAnimal() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ForeLegAnimal;
        }(Animal));
        var Dog = /** @class */ (function (_super) {
            __extends(Dog, _super);
            function Dog(_name) {
                var _this = _super.call(this) || this;
                _this._name = _name;
                return _this;
            }
            Dog.prototype.makeSound = function () {
                log(this.name + ": Wang Wang");
            };
            Object.defineProperty(Dog.prototype, "name", {
                get: function () {
                    if (this._name) {
                        return this._name;
                    }
                    else {
                        return "No Name Dog";
                    }
                },
                set: function (value) {
                    this._name = value;
                },
                enumerable: true,
                configurable: true
            });
            return Dog;
        }(ForeLegAnimal));
        var d1 = new Dog("LaLa");
        log(d1.name);
        d1.name = "LayaAir";
        d1.makeSound();
        d1.move();
        // let a = new Animal();
    };
    LearnClass.prototype.Test6 = function () {
        var Grid = /** @class */ (function () {
            function Grid(scale) {
                this.scale = scale;
            }
            Grid.prototype.calculateDistanceFromOrigin = function (point) {
                var xDist = (point.x - Grid.origin.x);
                var yDist = (point.y - Grid.origin.y);
                return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
            };
            Grid.origin = { x: 0, y: 0 };
            return Grid;
        }());
        var g1 = new Grid(1.0);
        var g2 = new Grid(5.0);
        log(g1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
        log(g2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
        Grid.origin.x = 5;
        log(g1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
        log(g2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    };
    LearnClass.prototype.Test5 = function () {
        var Player = /** @class */ (function () {
            function Player() {
            }
            Object.defineProperty(Player.prototype, "name", {
                get: function () {
                    if (this._name) {
                        return this._name;
                    }
                    return "no set name";
                },
                set: function (n) {
                    this._name = n;
                },
                enumerable: true,
                configurable: true
            });
            return Player;
        }());
        var p = new Player();
        log(p);
        log(p.name);
        p.name = "zf";
        log(p);
        log(p.name);
    };
    LearnClass.prototype.Test4 = function () {
        var arr = [{ '1': 100 }, { '2': 200 }];
        var json = JSON.stringify(arr);
        log(json);
        var str = '[{"1":100}, {"2":200}]';
        var obj = JSON.parse(str);
        log(obj);
        var Animal = /** @class */ (function () {
            function Animal(name, x, y, z) {
                this.name = name;
                this.x = x;
                this.y = y;
            }
            Animal.prototype.move = function () {
                log("Animal move: name=" + this.name + ", x=" + this.x);
            };
            return Animal;
        }());
        var a = new Animal("HAHA", 10, 100, 50);
        log(a);
        log(a.x);
        a.move();
    };
    LearnClass.prototype.Test3 = function () {
        var Animal = /** @class */ (function () {
            function Animal(theName) {
                this.name = theName;
            }
            return Animal;
        }());
        var Rhino = /** @class */ (function (_super) {
            __extends(Rhino, _super);
            function Rhino() {
                var _this = _super.call(this, "Rhino") || this;
                _this.x = 0;
                _this.y = 0;
                return _this;
            }
            return Rhino;
        }(Animal));
        var Employee = /** @class */ (function () {
            function Employee(theName) {
                this.name = theName;
            }
            return Employee;
        }());
        var animal = new Animal("Goat");
        var animal2 = new Animal("Goat");
        var rhino = new Rhino();
        var employee = new Employee("Employee");
        log(animal == animal2);
        log(animal === animal2);
        log(animal);
        log(rhino);
        log(employee);
        log("rhino.x = " + rhino.x);
        log("rhino.y = " + rhino.y);
        // rhino.x = 10;
        rhino.y = 10;
        log("rhino.x = " + rhino.x);
        log("rhino.y = " + rhino.y);
        // rhino = animal;
        animal = rhino;
        // animal = employee; // 错误: Animal 与 Employee 不兼容. 
    };
    LearnClass.prototype.Test2 = function () {
        var Animal = /** @class */ (function () {
            function Animal(name) {
                this.name = name;
            }
            Animal.prototype.move = function (distance) {
                if (distance === void 0) { distance = 0; }
                log("Animal : " + this.name + " move " + distance + "m.");
                log("");
            };
            return Animal;
        }());
        var Dog = /** @class */ (function (_super) {
            __extends(Dog, _super);
            function Dog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Dog.prototype.bark = function () {
                log("Dog bark: Woof! Woof!");
            };
            return Dog;
        }(Animal));
        var Snake = /** @class */ (function (_super) {
            __extends(Snake, _super);
            function Snake() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Snake.prototype.move = function (distance) {
                if (distance === void 0) { distance = 5; }
                log("Slithering ... ");
                _super.prototype.move.call(this, distance);
            };
            return Snake;
        }(Animal));
        var Hore = /** @class */ (function (_super) {
            __extends(Hore, _super);
            function Hore(id) {
                var _this = _super.call(this, "Hore " + id) || this;
                _this.id = id;
                return _this;
            }
            Hore.prototype.move = function (distance) {
                if (distance === void 0) { distance = 45; }
                log("Galloping ...");
                _super.prototype.move.call(this, distance);
            };
            return Hore;
        }(Animal));
        var dog = new Dog("AAA Dog");
        log(dog);
        dog.bark();
        dog.move(10);
        dog.bark();
        log("----------");
        var sam = new Snake("Sammy");
        var hore1 = new Hore(1);
        var hore2 = new Hore(2);
        log("");
        log(sam);
        log(hore1);
        log(hore2);
        log("----------");
        sam.move();
        hore1.move();
        hore2.move(100);
    };
    LearnClass.prototype.Test1 = function () {
        var Greeter = /** @class */ (function () {
            function Greeter(message) {
                this.greeting = message;
            }
            Greeter.prototype.greet = function () {
                return "Hello, " + this.greeting;
            };
            return Greeter;
        }());
        var greeter = new Greeter("world");
        log(greeter);
        log(greeter.greeting);
        log(greeter.greet());
    };
    return LearnClass;
}());
new LearnClass();
//# sourceMappingURL=LearnClass.js.map