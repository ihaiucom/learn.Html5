class GuiSkinConfig
{
    // 皮肤名称
    name:string;

    // 皮肤资源目录路径
    path:string;

    // 包配置字典
    packages: { [key: string]: GuiPackageConfig; };

    // 添加包配置
    addPackage(config: GuiPackageConfig)
    {
        this.packages[config.name] = config;
    }

    // 获取包配置
    getPackage(packageName: string): GuiPackageConfig
    {
        return this.packages[packageName];
    }
}