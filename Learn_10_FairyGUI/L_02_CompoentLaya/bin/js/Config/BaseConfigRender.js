var configs;
(function (configs) {
    var BaseConfigRender = /** @class */ (function () {
        function BaseConfigRender() {
        }
        // 获取配置
        BaseConfigRender.prototype.getConfig = function (id) {
            return this.configs[id];
        };
        // 添加配置
        BaseConfigRender.prototype.addConfig = function (config) {
            this.configs[config.id];
        };
        // 加载配置
        BaseConfigRender.prototype.load = function (configLoader) {
        };
        // 重新加载配置
        BaseConfigRender.prototype.reload = function (configLoader) {
        };
        // 清理
        BaseConfigRender.prototype.clear = function () {
            this.configs = {};
        };
        return BaseConfigRender;
    }());
    configs.BaseConfigRender = BaseConfigRender;
})(configs || (configs = {}));
//# sourceMappingURL=BaseConfigRender.js.map