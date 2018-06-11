 class Vector2
{
    x:number = 0;
    y:number = 0;
}

export class Unit
{
    name:string;
    position:Vector2;
    constructor(name:string = "DefaultName")
    {
        this.name = name;
        this.position = new Vector2();
    }
}
