class LearnFor
{
    constructor()
    {
        setTimeout(()=> {
            this.Test6();
        }, 500);

    }

    private Test6()
    {
        // let pets = new Set(["Cat", "Dog", "Hamster"]);
        // pets["species"] = "mammals";

        // for (let pet in pets) {
        //     console.log(pet); // "species"
        // }

        // for (let pet of pets) {
        //     console.log(pet); // "Cat", "Dog", "Hamster"
        // }
    }


    private Test5()
    {
        let someArray = [100, "string", false];

        h1("for of");
        for (let entry of someArray)
        {
            log(entry); // 1, "string", false
        }


        h1("for in");
        for (let entry in someArray)
        {
            log(entry); 
        }

        
        log("");
        log("");
        h1("this");
        for (let entry in this)
        {
            pre(entry); 
        }


        
        class Size {
            feet: number;

            hell:string = "hello";
            constructor(numFeet: number) { }

            static className:string;
            static className2:string = "Size";
        }

        h1("Size class");
        for (let entry in Size)
        {
            pre(entry); 
        }

        let size = new Size(10);
        
        h1("size obj");
        for (let entry in size)
        {
            pre(entry); 
        }

        
    }

    private Test1()
    {
        let items = [10, 20, 30, 40, 50];

        items.forEach((item)=>{
            log(item);
        });

        items.forEach((item, index, array)=>
            log(`item=${item}, index=${index}, array=${array}`)
        , this);

        
        items.forEach((item, index)=>{

            log(`item=${item}, index=${index}`);
        })
    }

    private Test2()
    {
        class Animal {
            feet: number;
            constructor(name: string, numFeet: number) { }
        }

        class Size {
            feet: number;
            constructor(numFeet: number) { }

            static className:string;
        }

        let a: Animal;
        let s: Size;

        a = s;  //OK
        s = a;  //OK


        
    }

    private Test3()
    {
        interface Empty<T> {
        }
        let x: Empty<number>;
        let y: Empty<string>;

        x = y;  // okay, y matches structure of x
    }
}

new LearnFor();