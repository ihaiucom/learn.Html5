/**
* name 
*/
namespace configs
{
	export class MsgConfigRenderStruct extends CsvConfigRender<MsgConfig>
	{
		path = "Msg";


        ParseCsv(csv: string[] )
        {
			let config = new MsgConfig();
			config.id = parseInt(   csv[ this.GetHeadIndex("id") ]   );
			config.txt = csv[ this.GetHeadIndex("id") ];

			this.addConfig(config);
        }
	}
}