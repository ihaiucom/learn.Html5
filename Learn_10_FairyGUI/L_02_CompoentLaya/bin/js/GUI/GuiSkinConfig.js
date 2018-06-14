var GuiSkinConfig = /** @class */ (function () {
    function GuiSkinConfig() {
    }
    // 添加包配置
    GuiSkinConfig.prototype.addPackage = function (config) {
        this.packages[config.name] = config;
    };
    // 获取包配置
    GuiSkinConfig.prototype.getPackage = function (packageName) {
        return this.packages[packageName];
    };
    return GuiSkinConfig;
}());
//# sourceMappingURL=GuiSkinConfig.js.map