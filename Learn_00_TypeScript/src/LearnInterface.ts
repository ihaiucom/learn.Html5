class LearnInterface
{
    constructor()
    {
        setTimeout(()=>{
            this.Test2();
        }, 500);
    }

    private Test2():void
    {
        interface PlayerValue
        {
            name:string;
        }

        function printPlayer(player: PlayerValue)
        {
            log(`player.name = ${player.name}`);
        }

        let user = {name:"zf", qq:593705098};
        printPlayer(user);
    }

    private Test1():void
    {
        h1("接口初探");

        function printLabel(labelObj: {label:string})
        {
            log(`labelObj = ${labelObj} `);
            log(`labelObj.label = ${labelObj.label} `);
            log(``);
        
        }

        let obj = {size: 10, label: "Size 10 object"};

        printLabel(obj);

    }
}

new LearnInterface();