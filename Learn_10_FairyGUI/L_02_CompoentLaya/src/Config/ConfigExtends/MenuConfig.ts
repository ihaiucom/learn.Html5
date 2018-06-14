namespace configs
{
	export class MenuConfig extends MenuConfigStruct
	{
        getName():string
        {
            return "MenuConfigExtend " + this.name;
        }
	}
}