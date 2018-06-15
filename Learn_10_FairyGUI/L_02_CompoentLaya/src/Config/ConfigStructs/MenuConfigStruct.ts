namespace configs
{
	export class MenuConfigStruct extends BaseConfig
	{
		id:number = 0;
		name:string = "";

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