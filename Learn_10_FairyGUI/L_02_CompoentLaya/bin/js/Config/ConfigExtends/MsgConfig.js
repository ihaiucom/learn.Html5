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
    var MsgConfig = /** @class */ (function (_super) {
        __extends(MsgConfig, _super);
        function MsgConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MsgConfig.prototype.getInfo = function () {
            return "MsgConfig.getInfo " + JSON.stringify(this);
        };
        return MsgConfig;
    }(configs.MsgConfigStruct));
    configs.MsgConfig = MsgConfig;
})(configs || (configs = {}));
//# sourceMappingURL=MsgConfig.js.map