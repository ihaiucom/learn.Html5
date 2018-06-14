/**
* name 
*/
namespace configs{
	export class MsgConfigRender extends MsgConfigRenderStruct
	{
		getInfo():string
		{
			return "MsgConfig.getInfo " + JSON.stringify(this);
		}
	}
}