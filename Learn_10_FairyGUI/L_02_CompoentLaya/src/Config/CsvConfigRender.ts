namespace configs
{
    export abstract class CsvConfigRender<T extends BaseConfig> extends BaseConfigRender<T>
    {
        // 单元格分隔符
        delimiter: string = "\t";

        // 表头--类型
        headTypes: Dictionary<number, string> = new Dictionary<number, string>();
        
        // 表头--索引
        headKeyEns: Dictionary<string, number> = new Dictionary<string, number>();
        
        // 表头--字段
        headKeyFields: Dictionary<number, string> = new Dictionary<number, string>();
        
        // 表头--中文
        headKeyCns: Dictionary<number, string> = new Dictionary<number, string>();

	
        reload()
        {
            this.headTypes.clear();
            this.headKeyEns.clear();
            this.headKeyFields.clear();
            this.headKeyCns.clear();
        }


		parse(txt: string )
        {
			if(txt == null)
			{
				console.error(`${this.path}: txt=${txt}`);
				return;
			}

            let lines:string[] = txt.split('\n');
            let line:string;
            let csv:string[];

            line = lines[0];
            csv = line.split(this.delimiter);
            this.ParseHeadTypes(csv);


            line = lines[1];
            csv = line.split(this.delimiter);
            this.ParseHeadKeyCN(csv);

            line = lines[2];
            csv = line.split(this.delimiter);
            this.ParseHeadKeyEN(csv);

            for(let i = 3; i < lines.length; i ++)
            {
                line = lines[i];
                csv = line.split(this.delimiter);
                this.ParseCsv(csv);
            }

        }


        
        ParseHeadTypes(csv: string[])
		{
			let key: string;
			for(let i = 0; i < csv.length; i ++)
			{
				key = csv[i];
				if (!isNullOrEmpty(key))
				{
					key = key.trim();
					this.headTypes.add(i, key);
				}
			}
		}

        ParseHeadKeyCN(csv: string[])
        {
			let key:string;
			for(let i = 0; i < csv.length; i ++)
			{
				key = csv[i];
				if (!isNullOrEmpty(key))
				{
					key = key.trim();
					this.headKeyCns.add(i, key);
				}
			}
        }

        ParseHeadKeyEN(csv: string[])
        {
            Laya.Dictionary;
            let key:string;
            for(let i = 0; i < csv.length; i ++)
            {
                key = csv[i];
                if (!isNullOrEmpty(key))
                {
                    key = key.trim();

                    if(this.headKeyEns.hasKey(key))
                    {
                        console.error(`${this.path}: ParseHeadKeyEN 已经存在key= ${key},  i = ${i}`);
                    }
                    this.headKeyEns.add(key, i);
                    this.headKeyFields.add(i, key);
                }
            }
        }


        ParseCsv(csv: string[] )
        {
        }

        GetHeadField(index:number): string
        {
            return this.headKeyFields.getValue(index);
        }

        GetHeadIndex(enName: string): number
        {
            if (this.headKeyEns.hasKey(enName))
            {
                return this.headKeyEns.getValue(enName);
            }

			console.error(`${this.path}: headKeyEns[${enName}] = -1`);
            return -1;
        }

    }
}