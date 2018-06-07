class LearnClass
{
    constructor()
    {
        setTimeout(() =>
        {
            this.Test7();

        }, 500);
    }

    private Test7()
    {


        abstract class Animal 
        {
            abstract makeSound(): void;

            move(): void {
                console.log('roaming the earch...');
            }
        }

        abstract class ForeLegAnimal extends Animal
        {
            abstract get name():string;
            abstract set name(value: string);
        }

        class Dog extends ForeLegAnimal
        {
            constructor(private _name:string)
            {
                super();
            }

            makeSound()
            {
                log(`${this.name}: Wang Wang`);
            }

            get name()
            {
                if(this._name)
                {
                    return this._name;
                }
                else
                {
                    return "No Name Dog"
                }
            }

            set name(value:string)
            {
                this._name = value;

            }
        }

        let d1 = new Dog("LaLa");
        log(d1.name);
        d1.name = "LayaAir";

        d1.makeSound();
        d1.move();

        // let a = new Animal();
    }

    private Test6()
    {
        class Grid
        {
            static origin = {x:0, y:0};

            constructor(public scale:number)
            {

            }

            calculateDistanceFromOrigin(point: {x: number; y: number;}) {
                let xDist = (point.x - Grid.origin.x);
                let yDist = (point.y - Grid.origin.y);
                return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
            }
        }

        let g1 = new Grid(1.0);
        let g2 = new Grid(5.0);

        log(g1.calculateDistanceFromOrigin({x:10, y:10}));
        log(g2.calculateDistanceFromOrigin({x:10, y:10}));

        Grid.origin.x = 5;


        log(g1.calculateDistanceFromOrigin({x:10, y:10}));
        log(g2.calculateDistanceFromOrigin({x:10, y:10}));
    }

    private Test5()
    {
        class Player
        {
            private _name:string;

            get name():string
            {
                if(this._name)
                {
                    return this._name;
                }
                return "no set name"
            }

            set name(n:string)
            {
                this._name = n;
            }
        }

        let p = new Player();
        log(p);
        log(p.name);

        p.name = "zf";
        log(p);
        log(p.name)
    }

    private Test4()
    {
        let arr = [{'1': 100}, {'2':200}];
        let json = JSON.stringify(arr);
        log(json);

        let str = '[{"1":100}, {"2":200}]';
        let obj = JSON.parse(str);
        log(obj);

        class Animal
        {
            constructor(private name:string, public x:number, protected y:number, z:number)
            {

            }

            public move():void
            {
                log(`Animal move: name=${this.name}, x=${this.x}`);
            }


        }

        let a = new Animal("HAHA", 10, 100, 50);
        log(a);
        log(a.x);
        a.move();
    }

    private Test3():void
    {
        class Animal {
            private name: string;
            constructor(theName: string) { this.name = theName; }
        }

        class Rhino extends Animal {
            public readonly x:number = 0;
            public  y = 0;
            
            constructor() { super("Rhino"); }

    
        }

        class Employee {
            private name: string;
            constructor(theName: string) { this.name = theName; }
        }

        let animal = new Animal("Goat");
        let animal2 = new Animal("Goat");
        let rhino = new Rhino();
        let employee = new Employee("Employee");
        log(animal == animal2);
        log(animal === animal2);
        log(animal);
        log(rhino);
        log(employee);

        log(`rhino.x = ${rhino.x}`);
        log(`rhino.y = ${rhino.y}`);

        // rhino.x = 10;
        rhino.y = 10;
        log(`rhino.x = ${rhino.x}`);
        log(`rhino.y = ${rhino.y}`);




        // rhino = animal;
        animal = rhino;
        // animal = employee; // 错误: Animal 与 Employee 不兼容. 
    }

    private Test2():void
    {
        class Animal
        {
            name:string;

            constructor(name:string)
            {
                this.name = name;
            }

            move(distance: number = 0)
            {
                log(`Animal : ${this.name} move ${distance}m.`);
                log(``);
            }
        }

        class Dog extends Animal
        {
            bark()
            {
                log(`Dog bark: Woof! Woof!`);
            }
        }

        class Snake extends Animal
        {
            move(distance = 5)
            {
                log(`Slithering ... `);
                super.move(distance);
            }
        }

        class Hore extends Animal
        {
            id: number;
            constructor(id)
            {
                super(`Hore ${id}`)
                this.id = id;
            }

            move(distance = 45)
            {
                log(`Galloping ...`);
                super.move(distance);

            }
        }

        const dog = new Dog("AAA Dog");
        log(dog);
        dog.bark();
        dog.move(10);
        dog.bark();
        log(`----------`);

        let sam = new Snake("Sammy");
        let hore1 = new Hore(1);
        let hore2 = new Hore(2);

        
        log(``);
        log(sam);
        log(hore1);
        log(hore2);
        log(`----------`);

        sam.move();
        hore1.move();
        hore2.move(100);
    }

    private Test1():void
    {
        class Greeter {
            greeting: string;
            constructor(message: string) {
                this.greeting = message;
            }
            greet() {
                return "Hello, " + this.greeting;
            }
        }

        let greeter = new Greeter("world");

        log(greeter);
        log(greeter.greeting);
        log(greeter.greet());
    }
}

new LearnClass();