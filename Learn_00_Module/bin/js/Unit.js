"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2 = /** @class */ (function () {
    function Vector2() {
        this.x = 0;
        this.y = 0;
    }
    return Vector2;
}());
var Unit = /** @class */ (function () {
    function Unit(name) {
        if (name === void 0) { name = "DefaultName"; }
        this.name = name;
        this.position = new Vector2();
    }
    return Unit;
}());
exports.Unit = Unit;
//# sourceMappingURL=Unit.js.map