namespace configs
{
	export class MsgConfig extends MsgConfigStruct
	{
		getInfo():string
		{
			return "MsgConfig.getInfo " + JSON.stringify(this);
		}
	}
}