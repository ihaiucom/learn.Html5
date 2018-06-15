namespace configs
{
    /// 配置读取器列表
    export class ConfigManagerList
    {
        // 读取器列表
        renders: ConfigRenderInterface[] = [];

        menu: MenuConfigRender = new MenuConfigRender();
        msg: MenuConfigRender = new MenuConfigRender();

        // 初始化读取器列表
        initList()
        {
            this.renders.push(this.menu);
            this.renders.push(this.msg);
        }
        
    }
}