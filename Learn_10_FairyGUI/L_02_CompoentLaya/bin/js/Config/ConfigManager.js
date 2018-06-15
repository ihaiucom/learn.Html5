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
    var ConfigManager = /** @class */ (function (_super) {
        __extends(ConfigManager, _super);
        function ConfigManager() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ConfigManager.prototype.loadAll = function () {
            for (var i = 0; i < this.renders.length; i++) {
                this.renders[i].load(this.configLoader);
            }
        };
        ConfigManager.prototype.reloadAll = function () {
            for (var i = 0; i < this.renders.length; i++) {
                this.renders[i].reload(this.configLoader);
            }
        };
        return ConfigManager;
    }(configs.ConfigManagerList));
    configs.ConfigManager = ConfigManager;
})(configs || (configs = {}));
//# sourceMappingURL=ConfigManager.js.map