class LearnLH
{
    constructor()
    {
        setTimeout(()=> {
            this.Test9();
        }, 500);

    }

    private Test10()
    {
    }

    private Test9()
    {
        type Keys = 'option1' | 'option2';
        type Flags = { [K in Keys]: boolean };

        
        interface Person {
            name: string;
            age: number;
        }
        let person: Person = {
            name: 'Jarid',
            age: 35
        };

        type NullablePerson = { [P in keyof Person]: Person[P] | null }
        type PartialPerson = { [P in keyof Person]?: Person[P] }

        type Nullable<T> = { [P in keyof T]: T[P] | null }
        type Partial<T> = { [P in keyof T]?: T[P] }

    }

    private Test8()
    {
        var numbers = [65, 44, 12, 4];
        numbers.map((value, index, arr)=>
        {
            log(`value=${value}, index=${index}, arr=${arr}`);
        });

        numbers.map(n => log(n));


        function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
            return names.map(n => o[n]);
        }

        interface Person {
            name: string;
            age: number;
        }
        let person: Person = {
            name: 'Jarid',
            age: 35
        };



        let strings: string[] = pluck(person, ['name']); // ok, string[]
        log(strings);
    }

    private Test7()
    {
        function pluck(o, names)
         {
            return names.map(n => o[n]);
        }
    }

    private Test6()
    {
        type Easing = "ease-in" | "ease-out" | "ease-in-out";
        class UIElement {
            animate(dx: number, dy: number, easing: Easing) {
                if (easing === "ease-in") {
                    // ...
                }
                else if (easing === "ease-out") {
                }
                else if (easing === "ease-in-out") {
                }
                else {
                    // error! should not pass null or undefined.
                }
            }
        }


        let button = new UIElement();
        button.animate(0, 0, "ease-in");
        // button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
    }

    private Test5()
    {
        type NameType = string;
        type NameFun = ()=>string;
        type NameAll = NameType | NameFun;

        let name:NameAll = "1234";
        log(typeof name)

        let fun:NameAll = function()
        {
            return "hello world";
        }

        fun();

        type Tree<T> = {
            value: T;
            left: Tree<T>;
            right: Tree<T>;
        }



    }

    private Test4()
    {
        interface Padder {
            getPaddingString(): string
        }

        abstract class BasePadder implements Padder
        {
            abstract getPaddingString(): string
        }

        class SpaceRepeatingPadder extends BasePadder implements Padder {
            constructor(private numSpaces: number) { super() }
            getPaddingString() {
                return Array(this.numSpaces + 1).join(" ");
            }
        }

        class StringPadder implements Padder {
            constructor(private value: string) { }
            getPaddingString() {
                return this.value;
            }
        }

        function getRandomPadder() {
            // return Math.random() < 0.5 ?
            //     new SpaceRepeatingPadder(4) :
                // new StringPadder("  ");

                return new StringPadder("  ");
        }

        // 类型为SpaceRepeatingPadder | StringPadder
        let padder: Padder = getRandomPadder();

        if (padder instanceof SpaceRepeatingPadder) {
            padder; // 类型细化为'SpaceRepeatingPadder'
        }
        if (padder instanceof StringPadder) {
            padder; // 类型细化为'StringPadder'
        }

        log(padder instanceof BasePadder);
        log(padder instanceof SpaceRepeatingPadder);
        log(padder instanceof StringPadder);

        let str = "abc";
        let num = 123;
        let arr = [1,2,3];

        log(arr instanceof String);
        log(arr instanceof Array);

    }


    private Test3()
    {
        interface Padder {
            getPaddingString(): string
        }

        class SpaceRepeatingPadder implements Padder {
            constructor(private numSpaces: number) { }
            getPaddingString() {
                return Array(this.numSpaces + 1).join(" ");
            }
        }

        class StringPadder implements Padder {
            constructor(private value: string) { }
            getPaddingString() {
                return this.value;
            }
        }

        function getRandomPadder() {
            return Math.random() < 0.5 ?
                new SpaceRepeatingPadder(4) :
                new StringPadder("  ");
        }

        // 类型为SpaceRepeatingPadder | StringPadder
        let padder: Padder = getRandomPadder();

        if (padder instanceof SpaceRepeatingPadder) {
            padder; // 类型细化为'SpaceRepeatingPadder'
        }
        if (padder instanceof StringPadder) {
            padder; // 类型细化为'StringPadder'
        }
    }


    private Test2()
    {
        function extend<T, U>(first: T, second: U): T & U 
        {
            let result = <T & U>{};
            for (let id in first) {
                (<any>result)[id] = (<any>first)[id];
            }
            for (let id in second) {
                if (!result.hasOwnProperty(id)) {
                    (<any>result)[id] = (<any>second)[id];
                }
            }
            return result;
        }


        interface Bird {
            fly();
            layEggs();
        }

        interface Fish {
            swim();
            layEggs();
        }

        
        interface AA {
            aa();
            layEggs();
        }

        function getSmallPet(): Fish | Bird | AA {
            let r = Math.random();
            if(r > 0.5)
            {
                return {swim: function(){log("Fish swim")}, layEggs: function(){log("Fish layEggs");}  }
            }
            else
            {
                return {fly: function(){log("Bird fly")}, layEggs: function(){log("Bird layEggs");}  }
            }

        }

        function aisFish2(pet: Fish | Bird | AA) : pet is Fish
        {
            return (<Fish>pet).swim !== undefined;
        }
        
        function isBird(pet: Fish | Bird | AA) : pet is Bird
        {
            return (<Bird>pet).fly !== undefined;
        }

        h1("Fish | Bird");
        let pet = getSmallPet();
        pet.layEggs(); // okay
        // pet.swim();    // errors

        if(   (<Fish>pet).swim   )
        {
            (<Fish>pet).swim();
        }

        if(   (<Bird>pet).fly   )
        {
            (<Bird>pet).fly();
        }

        log(``);
        if(aisFish2(pet))
        {
            pet.swim();
        }
        else if(isBird(pet))
        {
            pet.fly();
        }
        else
        {
            pet.aa();
        }

        h1("Bird & Fish");
        let fish = {swim: function(){log("Fish swim")}, layEggs: function(){log("Fish layEggs")} } ;
        let bird = {fly: function(){log("Bird fly")}, layEggs: function(){log("Bird layEggs")} } ;

        let p2 = extend<Bird, Fish>(bird, fish);
        p2.fly();
        p2.layEggs();
        p2.swim();


    }


    private Test1()
    {

        function isNumber(x: any): x  is number
        {
            return typeof x == "number"
        }

        function isString(x: any): x  is string
        {
            return typeof x == "string"
        }

        function padLeft(value: string, padding: number | string) 
        {
            if (isNumber(padding))
             {
                return Array(padding + 1).join("-") + value;
            }
            if (isString(padding)) 
            {
                return padding + value;
            }
            throw new Error(`Expected string or number, got '${padding}'.`);
        }

        function padLeft2(value: string, padding: string | number) 
        {
            if (typeof padding === "number") 
            {
                return Array(padding + 1).join(" ") + value;
            }
            if (typeof padding === "string")
             {
                return padding + value;
            }

            throw new Error(`Expected string or number, got '${padding}'.`);
        }

       log(  padLeft("Hello world", 4) ); // returns "    Hello world"
       log(  padLeft("Hello world", "aaaaaaaaaaaa") ); // returns "    Hello world"
    //    log(  padLeft("Hello world", true) ); // 编译阶段通过，运行时报错
    }

}

class LearnLH2 extends LearnLH
{

}

new LearnLH();