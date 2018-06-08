class LearnFunc
{
    constructor()
    {
        setTimeout(()=>{
            this.Test9();
        }, 500);
    }

    private Test9()
    {
        class Point
        {
            constructor(public x:number = 0, public y:number = 0)
            {

            }
        }


        class Player
        {
            move(path: Point[]):void
            move(point:Point):void
            move(x):void
            {
                log(`move typeof ${typeof x} `)
                if(x instanceof Point)
                {

                }
                else if(x instanceof Array)
                {

                }
                else
                {
                    
                }
            }
        }

        let player = new Player();
        player.move(10, 10);
        player.move(new Point(20, 20));
        player.move([new Point(1, 1), new Point(2, 2), new Point(3, 3)]);
    }

    private Test8()
    {
        let suits = ["hearts", "spades", "clubs", "diamonds"];

        function pickCard(x: {suit: string; card: number; }[]): number;
        function pickCard(x: number): {suit: string; card: number; };
        function pickCard(x): any
         {
            // Check to see if we're working with an object/array
            // if so, they gave us the deck and we'll pick the card
            if (typeof x == "object") 
            {
                let pickedCard = Math.floor(Math.random() * x.length);
                return pickedCard;
            }
            // Otherwise just let them pick the card
            else if (typeof x == "number") 
            {
                let pickedSuit = Math.floor(x / 13);
                return { suit: suits[pickedSuit], card: x % 13 };
            }
        }

        let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
        let pickedCard1 = myDeck[pickCard(myDeck)];
        alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

        let pickedCard2 = pickCard(15);
        alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
        
    }

    private Test7()
    {
        let suits = ["hearts", "spades", "clubs", "diamonds"];

        function pickCard(x): any 
        {
            // Check to see if we're working with an object/array
            // if so, they gave us the deck and we'll pick the card
            if (typeof x == "object") 
            {
                let pickedCard = Math.floor(Math.random() * x.length);
                return pickedCard;
            }

            // Otherwise just let them pick the card
            else if (typeof x == "number") 
            {
                let pickedSuit = Math.floor(x / 13);
                return { suit: suits[pickedSuit], card: x % 13 };
            }
        }

        let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
        let pickedCard1 = myDeck[pickCard(myDeck)];
        alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

        let pickedCard2 = pickCard(15);
        alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
    }

    private Test6()
    {
        // Define the original function.
        var checkNumericRange = function (value) {
            if (typeof value !== 'number')
                return false;
            else
                return value >= this.minimum && value <= this.maximum;
        }

        // The range object will become the this value in the callback function.
        var range = { minimum: 10, maximum: 20 };

        // Bind the checkNumericRange function.
        var boundCheckNumericRange = checkNumericRange.bind(range);

        // Use the new function to check whether 12 is in the numeric range.
        var result = boundCheckNumericRange (12);
        document.write(result);
    }

    private Test5()
    {
        this.Test4["name"] = "LearnFunc.Test5";
        this.Test4["myname"] = "LearnFunc.Test5";
        
        interface UIElement 
        {
            addClickListener(onclick: (this: void, e: Event) => void, obj?:Handler): void;
        }

        
        let uiElement: UIElement =
        {
            addClickListener(onclick:(this: void, e: Event) => void, obj?:Handler)
            {
                let event = new Event("HelloEvent");
                onclick(event);
            }
        }
        uiElement.addClickListener["name"] = "UIElement.addClickListener";
        uiElement.addClickListener["myname"] = "UIElement.addClickListener";


        class Handler 
        {
            info: string = "Hello Handle";
            onClickBad=  (e: Event)=>
            {
                this.info = e.type;
                log("clicked!");
            };

            constructor()
            {
                this.onClickBad["name"] = " Handler.onClickBad";
                this.onClickBad["myname"] = " Handler.onClickBad";
                this.onClickBad = this.onClickBad.bind(this);
            }
        }

        
        let h = new Handler();

        uiElement.addClickListener(h.onClickBad); 


    }

    private Test4()
    {
        this.Test4["name"] = "LearnFunc.Test4";
        this.Test4["myname"] = "LearnFunc.Test4";

        interface UIElement 
        {
            addClickListener(onclick: (this: void, e: Event) => void, obj?:Handler): void;
        }

        let uiElement: UIElement =
        {
            addClickListener(onclick:(this: void, e: Event) => void, obj?:Handler)
            {
                let a = onclick["constructor"];
                log("addClickListener caller:" + this.addClickListener.caller.toString());
                log("addClickListener arguments.callee:" + arguments.callee);
                log("addClickListener onclick=" + onclick);

                let event = new Event("HelloEvent");
                
                if(obj)
                {
                    obj.onClickBad(event);
                }
                else
                {
                    onclick.apply(obj, [event]);
                }
            }

        }
        

        let cc = uiElement["constructor"];
        
        log(uiElement["constructor"]);
        
         cc = uiElement.addClickListener["constructor"];
        log(uiElement.addClickListener["constructor"]);
        log(uiElement.addClickListener.length);
        uiElement.addClickListener["name"] = "UIElement.addClickListener";
        uiElement.addClickListener["myname"] = "UIElement.addClickListener";

        class Handler 
        {
            info: string;
            onClickBad= (e: Event) =>
            {
                // oops, used this here. using this callback would crash at runtime
                this.info = e.type;
                log("clicked!");
            };

            constructor()
            {
                
        this.onClickBad["name"] = " Handler.onClickBad";
        this.onClickBad["myname"] = " Handler.onClickBad";
            }

        }
        

        let h = new Handler();
         cc =  h["constructor"];
        log(h["constructor"]);

        uiElement.addClickListener(h.onClickBad, h); // error!
        uiElement.addClickListener(h.onClickBad); // error!
    }

    private Test3()
    {
        interface Info
        {
            username:string;
            password:string;
        }

        interface PlayerInterface
        {
            username:string;
            password:string;
            login(this: PlayerInterface): ()=>Info;
            login2(this: PlayerInterface): ()=>Info;
        }

        let player : PlayerInterface= 
        {
            username: "zengfeng",
            password: "123",
            login: function(this: PlayerInterface)
            {
                log("login:" + this.username)
                let mthis = this;
                return function(this: PlayerInterface)
                {
                    log("login func:" + mthis.username)
                    return {username: mthis.username, password:mthis.password}
                }
            },

            login2: function()
            {
                log("login2:" + this.username)
                return ()=>
                {
                    log("login2 func:" + this.username)
                    return {username: this.username, password:this.password}
                }
            }
        }

        h1("login");
        let login = player.login();
        let result = login();
        log(result);

        h1("login2");
        login = player.login2();
        result = login();
        log(result);


    }

    private Test2():void
    {
        function build(cmd:string, input:string, output:string, ... args:any[])
        {
            return `${cmd} --input=${input} --output=${output} --args=${args.join( )}`
        }

        let result = build("protoc", "hello.proto", "hello.ts", "a", "b", "c", 1, 2, 3);
        log(result);
    }

    public readonly myclaseName:String = "LearnFunc";
    private Test1():void
    {
        h1(`书写完整函数类型`);

        let add:(x:number, y:number) => number =function(x:number, y:number):number
        {
            log(this.myclaseName);
            return x + y;
        }

        let mul:(x:number, y:number) => number;

        mul = (x, y)=>
        {
            log(this.myclaseName);
            return x * y;
        }

        let result = add(10, 5);
        log(result);

        result = mul(10, 5);
        log(result);
        
    }


}

new LearnFunc();