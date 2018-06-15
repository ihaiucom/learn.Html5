function toStringArray(txt: string, separator = /[:,;]/) : string[]
{
    return txt.split(separator);
}

function toIntArray(txt: string, separator = /[:,;]/) :  number[]
{
    let list: number[] = [];
    let arr = toStringArray(txt, separator);
    for(let i = 0; i < arr.length; i ++)
    {
        list.push( parseInt(arr[i]) );
    }
    return list;
}



function toFloatArray(txt: string, separator = /[:,;]/) :  number[]
{
    let list: number[] = [];
    let arr = toStringArray(txt, separator);
    for(let i = 0; i < arr.length; i ++)
    {
        list.push( parseFloat(arr[i]) );
    }
    return list;
}

function toBoolean(val: any): boolean
{
    if(val)
    {
        if(isNumber(val))
        {
            return val != 0;
        }
        else if(isString(val))
        {
            return val == "true" || parseInt(val) != 0 ;
        }
        return true;
    }
    else
    {
        return false;
    }
}


function toBooleanArray(txt: string, separator = /[:,;]/) :  boolean[]
{
    let list: boolean[] = [];
    let arr = toStringArray(txt, separator);
    for(let i = 0; i < arr.length; i ++)
    {
        list.push( toBoolean(arr[i]) );
    }
    return list;
}



function configCellToArray(txt: string, separator =  /[;]/) :  string[]
{
    return toStringArray(txt, separator);
}

function csvGetInt(csv: string[],  i:number): number
{
    return parseInt(csv[i]);
}


function csvGetFloat(csv: string[],  i:number): number
{
    return parseFloat(csv[i]);
}

function csvGetBoolean(csv: string[],  i:number): boolean
{
    return toBoolean(csv[i]);
}

function csvGetString(csv: string[],  i:number): string
{
    return csv[i];
}