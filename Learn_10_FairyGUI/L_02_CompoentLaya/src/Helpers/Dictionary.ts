class Dictionary<K, T>
{
    dict: { [key: string]: T; [key: number]: T; } = {};

    add(key: string | number, val:T)
    {
        this.dict[key] = val;
    }

    remove(key: string | number)
    {
        this.dict[key] = undefined;
    }

    hasKey(key: string | number)
    {
        return this.dict[key] != undefined
    }

    getValue(key: string | number)
    {
        return this.dict[key];
    }

    getValues(): T[]
    {
        let list:T[] = [];
        for (var key in this.dict) 
        {
            list.push(this.dict[key]);
        }

        return list;
    }

    getKeys()
    {
        let list = [];
        for (var key in this.dict) 
        {
            list.push(key);
        }

        return list;
    }

    clear()
    {
        this.dict = {};
    }


}