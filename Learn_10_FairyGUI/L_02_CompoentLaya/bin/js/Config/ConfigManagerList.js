var configs;
(function (configs) {
    /// 配置读取器列表
    var ConfigManagerList = /** @class */ (function () {
        function ConfigManagerList() {
            // 读取器列表
            this.renders = [];
            this.menu = new configs.MenuConfigRender();
            this.msg = new configs.MenuConfigRender();
        }
        // 初始化读取器列表
        ConfigManagerList.prototype.initList = function () {
            this.renders.push(this.menu);
            this.renders.push(this.msg);
        };
        return ConfigManagerList;
    }());
    configs.ConfigManagerList = ConfigManagerList;
})(configs || (configs = {}));
//# sourceMappingURL=ConfigManagerList.js.map