namespace configs
{
    export class ConfigManager extends ConfigManagerList
    {
        configLoader: ConfigLoaderInterface;

        // 加载所有
        loadAll()
        {
            for(let i = 0; i < this.renders.length; i ++)
            {
                this.renders[i].load(this.configLoader);
            }
            
            this.onGameLoadedAll();
        }

        // 重新加载所有
        reloadAll()
        {
            for(let i = 0; i < this.renders.length; i ++)
            {
                this.renders[i].reload(this.configLoader);
            }

            this.onGameLoadedAll();
        }

        // 加载完成所有
        onGameLoadedAll()
        {
            for(let i = 0; i < this.renders.length; i ++)
            {
                this.renders[i].onGameLoadedAll();
            }
        }
    }
}