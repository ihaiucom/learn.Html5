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
var configs;
(function (configs) {
    var MsgConfigStruct = /** @class */ (function (_super) {
        __extends(MsgConfigStruct, _super);
        function MsgConfigStruct() {
            var _this = _super.call(this) || this;
            _this.id = 0;
            _this.txt = "Hello";
            return _this;
        }
        return MsgConfigStruct;
    }(configs.BaseConfig));
    configs.MsgConfigStruct = MsgConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MsgConfigStruct.js.map