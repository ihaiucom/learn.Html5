namespace configs
{
	export class MenuConfig extends MenuConfigStruct
	{
        getName():string
        {
            return "MenuConfigExtend " + this.name;
        }

        static parse(str:string): MenuConfig
        {
            let config = new MenuConfig();
            config.id = 1;
            return config;
        }

        
        static parseArray(str:string): MenuConfig[]
        {
            let list: MenuConfig[] = [];

            let config = new MenuConfig();
            config.id = 1;
            
            return list;
        }
	}
}