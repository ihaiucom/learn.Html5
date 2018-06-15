namespace Games
{
    export class AssetManager implements configs.ConfigLoaderInterface
    {
        // [同步] 加载配置
        loadConfig(path: string): string
        {
            return path;
        }

        // [异步] 加载配置
        loadConfigAsync(path: string, callback?:configs.ConfigLoaderCallback)
        {
            if(callback)
            {
                callback(path, this.loadConfig(path));
            }
        }


    }
}