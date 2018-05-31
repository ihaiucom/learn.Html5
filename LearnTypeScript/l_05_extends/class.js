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
function log(msg) {
    document.body.innerHTML += msg + "<br>\n";
    console.log(msg);
}
var Shape = /** @class */ (function () {
    function Shape(name, x, y, color) {
        this.y = y;
        this.clsname = "Shape";
        log("[Shape constructor]");
        this.name = name;
        this.x = x;
        this.color = color;
    }
    Shape.prototype.shoutout = function () {
        return "[Shape shotout] this.name=" + this.name + ", this.x=" + this.x + ", this.y=" + this.y + ", this.color=" + this.color + " name=" + name;
    };
    Shape.prototype.a = function () {
        log("Shape private a");
    };
    Shape.prototype.b = function () {
        log("Shape protected b");
    };
    return Shape;
}());
var Shape3D = /** @class */ (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, x, y, color, volume) {
        var _this = this;
        log("[Shape3D constructor]");
        _this = _super.call(this, name, x, y, color) || this;
        _this.volume = volume;
        _this.clsname = "Shape3D";
        log(_this.clsname + " " + _this.name);
        _this.b();
        _this.superb();
        return _this;
    }
    Shape3D.prototype.b = function () {
        log("Shape3D protected b");
    };
    Shape3D.prototype.superb = function () {
        log("Shape3D protected superb");
        _super.prototype.b.call(this);
    };
    return Shape3D;
}(Shape));
var square = new Shape("square", 30, 30, "red");
var square3D = new Shape3D("laya", 10, 20, "blue", 9);
log(square.shoutout());
log(square3D.shoutout());
log("square3D.volume=" + square3D.volume);
square3D.volume = 100;
log("square3D.volume=" + square3D.volume);
