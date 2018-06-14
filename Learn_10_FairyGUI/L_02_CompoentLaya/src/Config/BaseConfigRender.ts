namespace configs
{
    export abstract class BaseConfigRender<T extends BaseConfig>
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
            this.configs[config.id];
        }

        // 加载配置
        load()
        {
            
        }

        // 重新加载配置
        reload()
        {

        }

        // 解析内容
        parse(content: string)
        {

        }


    }
}