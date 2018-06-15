namespace configs
{
    
    // 加载回调接口
    export interface ConfigRenderComplete
    {
        (render: ConfigRenderInterface):void;
    }

    // 加载回调接口
    export interface ConfigLoaderCallback
    {
        (path: string, txt: string):void;
    }

    // 配置加载器接口
    export interface ConfigLoaderInterface
    {
        loadConfig(path: string): string;

        loadConfigAsync(path: string, callback?:ConfigLoaderCallback);
    }

    // 配置读取器接口
    export interface ConfigRenderInterface
    {
        // 加载配置
        load(configLoader?: ConfigLoaderInterface, onComplete?:ConfigRenderComplete);
        
        // 重新加载配置
        reload(configLoader?: ConfigLoaderInterface, onComplete?:ConfigRenderComplete);

        // 游戏加载完所有
        onGameLoadedAll();

        // 清理
        clear();
    }
}