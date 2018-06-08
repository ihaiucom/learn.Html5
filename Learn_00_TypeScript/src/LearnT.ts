class LearnT
{
    constructor()
    {
        setTimeout(() => {
            this.Test11();
        }, 500);
    }

    private Test11()
    {
        class HeroCtrl
        {
            heroName:string;
        }

        class SoliderCtrl
        {
            soliderName:string;
        }

        class Unit
        {
            unitName:string;
        }

        class Hero extends Unit
        {
            ctrl:HeroCtrl;
        }

        class Solider extends Unit
        {
            ctrl:SoliderCtrl;
        }

        function findCtrl<T extends Unit, K>(unit: { ctrl: K;}): K
        {
            return unit.ctrl;
        }
        
        function findClassCtrl<T extends Unit, K>(unit: { new (): T; prototype:{ ctrl: K; } }): K
        {
            return unit.prototype.ctrl;
        }

        let hero = new Hero();
        let solider = new Solider();

        findCtrl(hero).heroName;
        findCtrl(solider).soliderName;

        
        findClassCtrl(Hero).heroName;
        findClassCtrl(Solider).soliderName;
    }

    private Test10()
    {
        interface Cls<T>
        {
            new ():T;

        }
        
        interface Cls2<T>
        {
             charAt(pos: number): string;

        }

        function create<T extends Cls2<T>>(c: Cls<T>): T
        {
            let v = new c();
            v.charAt(2);
            return v;
        }

        class Player
        {
            charAt(pos: number): string
            {
                return "Player";
            }
        }

        let p = create(Player);
        let s = create(String);

    }

    private Test9()
    {
        // interface Findable<T>
        // {
        //     [key:number] : T;
        //     [key:string] : T;
        // }

        // function find<T, U extends Findable<T>>(n: T, s: U)
        // {
        // }


        // let giraffe = "a";
        // let myAnimals:Findable<string> = {a: "aaa", b: "bbb"};

        // find (giraffe, myAnimals);


        // interface Dict
        // {
        //     [propName:string] : any;
        // }


        function getProperty<T>(obj: {[keyname:string]: T;[keyname:number]: T;}, key: (string | number)) : T
        {
            return obj[key];
        }
        
        // let x = { a: 1, b: 2, c: 3, d: 4 };
        // log( getProperty(x, "a") ); // okay
        // log( getProperty(x, "m") ); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

    }


    private Test8()
    {
        interface Lengthwise
        {
            length:number;
        }

        function outLength<T extends Lengthwise>(arg: T):T
        {
            log(arg.length);
            return arg;
        }

        log(outLength("abcdefg"));
        log(outLength([1,2,3,4, "a", "b"]));
        log(outLength({length:100, value:true}));
    }



    private Test7()
    {
        class GenericNumber<T> 
        {
            zeroValue: T;
            add: (x: T, y: T) => T;
        }

        let myGenericNumber = new GenericNumber<number>();
        myGenericNumber.zeroValue = 0;
        myGenericNumber.add = function(x, y) { return x + y; };

        log(myGenericNumber.add(10, 5));

        let stringGeneric = new GenericNumber<string>();
        stringGeneric.zeroValue = "";
        stringGeneric.add = function(x, y) {return x + y;};

        log(stringGeneric.add("10", "5"));
    }


    private Test6()
    {
        interface IndentityInterface<T>
        {
            (arg:T):T;
        }

        function identity<T>(arg: T): T 
        {
            return arg;
        }

        let stringIndentity: IndentityInterface<string> = identity;
        let numberIndentity: IndentityInterface<number> = identity;


        let str = stringIndentity("abc");
        log(str);

        let num = numberIndentity(12345);
        log(num);
    }

    private Test5()
    {
        interface IndentityInterface
        {
            <T>(arg:T):T;
        }

        function identity<T>(arg: T): T 
        {
            return arg;
        }

        let myIdentity: IndentityInterface = identity;


        let str = myIdentity("abc");
        log(str);
    }

    private Test4()
    {
        function identity<T>(arg: T): T 
        {
            return arg;
        }

        let myIdentity: {<T>(arg: T): T} = identity;


        let str = myIdentity("abc");
        log(str);
    }


    private Test3()
    {
        function getLength<T>(arg: T[]): T[]
        {
            log(arg.length);
            return arg;
        }

        let ouLength:<U>(arg:U)=>U = getLength;

        log(ouLength("abc"))
        log(ouLength([1,2,3]))
        
    }


    private Test2()
    {
        function getLength<T>(arg: T[]): T[]
        {
            log(arg.length);
            return arg;
        }

        let arr = getLength([1,2,3]);

        
    }

    private Test1()
    {
        function identity<T>(arg: T): T
        {
            return arg;
        }

        let str = identity<string>("a");
        let num = identity<number>(2);

        
        let str2 = identity("a");
        let num2 = identity(2);
        
    }
}

new LearnT();