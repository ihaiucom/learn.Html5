class LearnInterface
{
    constructor()
    {
        setTimeout(()=>{
            this.Test16();
        }, 500);
    }

    private Test16()
    {
        class Control
        {
            public id:number;
             nodeName:string;
            private state:any;
            node:any;

            constructor(id: number, name: string, state:any)
            {
                this.id = id;
                this.nodeName = name;
                this.state = state;

            }

             privateMethod():void
            {
                log(`Control.privateMethod: this=${JSON.stringify(this)}`);
            }

            
             protectedMethod():void
            {
                log(`Control.protectedMethod: this=${JSON.stringify(this)}`);
            }
            
            public publicMethod():void
            {
                log(`Control.protectedMethod: this=${JSON.stringify(this)}`);
            }
            
            myMethod():void
            {
                log(`Control.myMethod: this=${JSON.stringify(this)}`);
            }

            getState():any
            {
                log(`Control.getState: this=${JSON.stringify(this)}`);
                return this.state;
            }
        }

        interface SelectableControl extends Control
        {
            select():void;
        }

        class Button extends Control implements SelectableControl
        {
            select():void
            {
                log(`Button.select: this=${JSON.stringify(this)}`);
            }

            
            getState():any
            {
                log(`Button.getState: this=${JSON.stringify(this)}`);
                return super.getState();
            }
        }



        let button:SelectableControl = new Button(1, "Button-OK", "up");
        log(button);
        button.select();
        button.publicMethod();

        log(button.getState());



    }

    private Test15()
    {
        h1("混合类型");

        interface Counter
        {
            (start: number) : string;
            interval:number;
            reset():void;
        }


        function getCounter():Counter
        {
            let counter = <Counter> function(start: number)
            {
                log(`Set Start: ${start}`);
                return `Set Start: ${start}`
            };

            counter.interval = 123;
            counter.reset = function()
            {
                log("reset");
            }

            return counter;
        }

        let c = getCounter();
        log(c);
        let v = c(10);
        log(`v=${v}`);
        log(c);
        c.reset();
        c.interval = 5.0;

        log(c);
        log(typeof(c));
        log(typeof(c as Object));
        log((c as Object));
        
    }


    private Test14()
    {
        interface Shape
        {
            color:string;
        }

        interface PenStroke
        {
            penWidth:number;
        }

        interface Square extends Shape, PenStroke
        {
            sideLength:number;
        }

        let square = {} as Square;
        log(square);
        square.color = "blue";
        square.sideLength = 10;
        square.penWidth = 5.0;

        log(square);

    }

    
    private Test13()
    {
        interface ClockConstructor
        {
            new (hour: number, minute: number): ClockInterface;

            GetType():string;
        }

        interface ClockInterface 
        {
            tick();
        }

                
        function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
            log(`createClock: ctor.GetType()= ${ctor.GetType()}`);
            return new ctor(hour, minute);
        }

        class DigitalClock implements ClockInterface {
            constructor(h: number, m: number) { }
            tick() {
                console.log("beep beep");
            }

            static GetType():string
            {
                return "DigitalClock";
            }

        }
        class AnalogClock implements ClockInterface {
            constructor(h: number, m: number) { }
            tick() {
                console.log("tick tock");
            }

            static GetType():string
            {
                return "AnalogClock";
            }
        }

        let digital = createClock(DigitalClock, 12, 17);
        let analog = createClock(AnalogClock, 7, 32);

        digital.tick();
        analog.tick();

    }

    private Test12()
    {
        interface ClockInterface
        {
            currentTime: Date;

            setTime(d: Date);
        }

        class Clock implements ClockInterface
        {
            currentTime : Date;
            h:number;
            m:number;

            constructor(h: number, m:number)
            {
                this.h = h;
                this.m = m;
            }

            setTime(d: Date)
            {
                this.currentTime = d;
            }
        }

        let clock = new Clock(11, 20);
        log(clock);

        let c: ClockInterface = clock;
        c.setTime(new Date());
        log(clock);
        log(c);

    }

    private Test11()
    {
        class Animal
        {
            name:string;
        }

        class Dog extends Animal
        {
            say:string;
        }

        // interface AnimalDict
        // {
        //     [x: number] : Animal;
        //     [x: string] : Dog;
        // }
    }

    private Test10()
    {
        interface Dict
        {
            [id: number] : string;
            [key: string]: string;
        }

        let arr =  ["zf", "ihaiu", "zhm"];
        let dict: Dict = {laya:"Laya", html:"html"}

        for(let i = 0; i < arr.length; i ++)
        {
            dict[i] = arr[i];
            dict[arr[i]] = arr[i];
        }

        log(typeof("123"));
        log(typeof(1));
        log(typeof(arr));
        log(typeof(dict));

        log(arr)
        log(dict)



    }

    private Test9()
    {
        interface StringArray
        {
            [index: number]: string;
        }

        let arr : StringArray = ["zf", "ihaiu", "zhm"];
        let name = arr[0];
        arr[10] = "a";
        arr[11] = "b";
        log(arr);
        log(name);
        log(arr[10]);
        log(arr["10"]);
        

        log(``)
        log(`null == null,   ${null == null}`)
        log(`null == void 0,   ${null == void 0}`)
        log(`null == undefined,   ${null == undefined}`)
        log(``)
        
        log(`void 0 == void 0,   ${void 0 == void 0}`)
        log(`void 0 == undefined,   ${void 0 == undefined}`)
        log(``)
        
        log(`undefined == undefined,   ${undefined == undefined}`)
        log(``)

        
        log(``)
        log(``)
        log(`null === null,   ${null === null}`)
        log(`null === void 0,   ${null === void 0}`)
        log(`null === undefined,   ${null === undefined}`)
        log(``)
        
        log(`void 0 === void 0,   ${void 0 === void 0}`)
        log(`void 0 === undefined,   ${void 0 === undefined}`)
        log(``)
        
        log(`undefined === undefined,   ${undefined === undefined}`)
        log(``)

    }

    private Test8():void
    {
        interface ClickCallback
        {
            (nodename: string): void;
        }

       let OnClick: ClickCallback = function (node: string)
        {
            log(`OnClick node:${node}`);
        }

        function run(node: string, callback: ClickCallback)
        {
            if(callback)
            {
                callback(node);
            }
            else
            {
                error(`run callback=${callback}`)
            }
        }

        run("Button-Ok", OnClick);
        run("Button-Ok", null);
    }

    private Test7():void
    {
        interface SearchFunc
        {
            (src:string, key: string) : boolean;
        }

        let serach: SearchFunc = function(src, key)
        {
            let result = src.search(key);
            return result > -1;
        };

        let result =  serach("Hello World My Name Is Zeng Feng", "m");
        log(`result= ${result}`);

    }

    private Test6():void
    {
        interface SquareConfig
        {
            color?: string;
            width?: number;
            [key: string]:any;
        }

        function createSquare(config: SquareConfig) : {color:string, area: number}
        {
            let square = {color: "white", area: 100};
            if(config.color)
            {
                square.color = config.color;
            }
            else
            {
                log(`no set color: config.color= ${config.color}`);
            }

            if(config.width)
            {
                square.area = config.width * config.width;
            }
            else
            {
                
                log(`no set width: config.width = ${config.width}`);
            }

            return square;
        }

        let square = createSquare({color:"black"});

        log(`square.color = ${square.color}`);
        log(`square.area = ${square.area}`);
        log(``);

        square = createSquare({colr:"red", width: 5, x:1, y: 2} );

        log(`square.color = ${square.color}`);
        log(`square.area = ${square.area}`);
        log(``);

    }

    private Test5()
    {
        let arr:number[] = [1,2,3,4,5];
        let ro: ReadonlyArray<number> = arr;

        arr[0] = 11;
        arr.push(10);

        // ro[0] = 101;
        // ro.push(100);
        // arr = ro;
        log(arr["push"]);
        log(ro["push"]);

        ro["push"](1000);
        arr = ro as Array<number>;
        arr = ro as number[];
        arr = ro as any;




        log(`arr=${arr}`);
        log(`ro=${ro}`);
    }

    private Test4()
    {
        interface Point
        {
            readonly x:number;
            readonly y:number;
        }

        let p: Point = {x: 10, y:10};
        // p.x = 100;
        // p.z = 200;

        (p as any).x = 100;
        (p as any).z = 300;

        log(`p.x = ${p.x}`);
        log(`p.y = ${p.y}`);
        // log(`p.z = ${p.z}`);
        log(`p.z = ${(p as any).z}`);

    }

    private Test3():void
    {
        interface SquareConfig
        {
            color?: string;
            width?: number;
        }

        function createSquare(config: SquareConfig) : {color:string, area: number}
        {
            let square = {color: "white", area: 100};
            if(config.color)
            {
                square.color = config.color;
            }
            else
            {
                log(`no set color: config.color= ${config.color}`);
            }

            if(config.width)
            {
                square.area = config.width * config.width;
            }
            else
            {
                
                log(`no set width: config.width = ${config.width}`);
            }

            return square;
        }

        let square = createSquare({color:"black"});

        log(`square.color = ${square.color}`);
        log(`square.area = ${square.area}`);
        log(``);

        square = createSquare(({colr:"red", width: 5, x:1, y: 2} as SquareConfig));

        log(`square.color = ${square.color}`);
        log(`square.area = ${square.area}`);
        log(``);

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