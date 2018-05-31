function log(msg) {
    document.body.innerHTML += msg + "<br>\n";
    console.log(msg);
}
var Shape = /** @class */ (function () {
    function Shape(name, width, height) {
        var _this = this;
        this.port = 0;
        this.web = "爱海游 http://blog.ihaiu.com";
        this.width = width;
        this.height = height;
        this.name = name;
        this.arean = width * height;
        this.color = "pink";
        this.print = function () { log("<br>\n<b>=> print: name=" + _this.name + " this.width=" + _this.width + " width=" + width + "<b><br>\n"); };
        this.print2 = function () { log("<br>\n<b>=> print2: name=" + this.name + " this.width=" + this.width + " width=" + width + "<b><br>\n"); };
    }
    Shape.prototype.shoutout = function () {
        return "color = " + this.color + ",  name=" + this.name + ",  arean = " + this.arean + " port" + this.port;
    };
    return Shape;
}());
var square = new Shape("square", 30, 30);
var square2 = new Shape("square2", 20, 20);
log(square.shoutout());
log("");
log("-----------");
log("name:" + square.name);
log("arean:" + square.arean);
log("color:" + square.color);
log("width:" + square.width);
log("height:" + square.height);
square.print();
square.print2();
square2.print();
square2.print2();
log("===========");
log("");
square.name += " 修改";
square.color = "bule";
square.width = 50;
log(square.shoutout());
log("");
log("-----------");
log("name:" + square.name);
log("arean:" + square.arean);
log("color:" + square.color);
log("width:" + square.width);
log("height:" + square.height);
log("");
log("-----------");
log(square2.shoutout());
log("");
square.print();
square.print2();
square2.print();
square2.print2();
