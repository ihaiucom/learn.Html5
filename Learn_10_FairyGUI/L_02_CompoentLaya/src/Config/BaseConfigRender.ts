namespace configs
{
    export abstract class BaseConfigRender<T extends BaseConfig> implements ConfigRenderInterface
    {
        // 配置路径
        path:string;

        // 配置字典
        configs: { [key: string]: T; };

        // 获取配置
        getConfig(id:number)
        {
            return this.configs[id];
        }

        // 添加配置
        addConfig(config: T)
        {
            this.configs[config.id] = config;
        }


        // 加载配置
        load(configLoader?: ConfigLoaderInterface, onComplete?:ConfigRenderComplete)
        {

        }
        
        // 重新加载配置
        reload(configLoader?: ConfigLoaderInterface, onComplete?:ConfigRenderComplete)
        {

        }

        
        // 游戏加载完所有
        onGameLoadedAll()
        {

        }
        
        // 清理
        clear()
        {
            this.configs = {}
        }


    }
}