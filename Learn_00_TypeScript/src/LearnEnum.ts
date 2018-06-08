class LearnMenu
{
    constructor()
    {
        setTimeout(()=>{
            this.Test6();
        }, 500);
    }

    private Test6()
    {
        let x = (a: number, c:any) => 0;
        let y = (b: number, s: string) => 0;

        y = x; // OK
        x = y; // Error
    }

    private Test5()
    {
        interface Named 
        {
            name: string;
        }

        let x: Named;
        // y's inferred type is { name: string; location: string; }
        let y = { name: 'Alice', location: 'Seattle' };
        x = y;
    }

    private Test4()
    {
        window.onmousedown = function(mouseevent)
        {
            log(mouseevent.type);
        }

        enum BooleanLikeHeterogeneousEnum {
            No = 0,
            Yes = "YES",
        }
        
        log(BooleanLikeHeterogeneousEnum);
    }

    private Test3()
    {
        const enum Laya
        {
            A = 1,
            B = A * 2
        }

        log(Laya.A);
        log(Laya.B);

        const enum Directions {
            Up,
            Down,
            Left,
            Right
        }


        
        log(Directions.Up);
        
        log(Directions.Right);
    }

    private Test2()
    {
        // enum DirectionName
        // {
        //     Up = "UP",
        //     Down = "DOWN",
        //     Left = "LEFT",
        //     Right = "RIGHT",
        // }
        
        // log(DirectionName)

        enum FileAccess {
            // constant members
            None,
            Read    = 1 << 1,
            Write   = 1 << 2,
            ReadWrite  = Read | Write
            // computed member
            // G = "123".length
        }

        log(FileAccess);
    }

    private Test1()
    {
        enum Direction {
            Up = 1,
            Down,
            Left,
            Right
        }


        log(Direction)

        enum MenuId
        {
            Main,
            Login,
            Hero,

            War = 30,
            WarOver
        }
        
        log(MenuId)

        function OpenMenu(menuId: MenuId)
        {
            log(typeof menuId)
            log(`Open Menu: menuId=${menuId}  ${MenuId[menuId]}`);
        }

        OpenMenu(MenuId.Login);
        OpenMenu(30);

        log(`1 == MenuId.Login  :  ${1 == MenuId.Login}`);
        log(`1 === MenuId.Login  :  ${1 === MenuId.Login}`);
        log(`2 === MenuId.Login  :  ${2 == MenuId.Login}`);
    }
}

new LearnMenu();