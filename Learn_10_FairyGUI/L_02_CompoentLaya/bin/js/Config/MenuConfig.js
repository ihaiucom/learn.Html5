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
var MenuConfig = /** @class */ (function (_super) {
    __extends(MenuConfig, _super);
    function MenuConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuConfig.prototype.getName = function () {
        return "MenuConfigExtend " + this.name;
    };
    return MenuConfig;
}(MenuConfigStruct));
//# sourceMappingURL=MenuConfig.js.map