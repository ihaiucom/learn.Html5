class LearnFor
{
    constructor()
    {
        setTimeout(()=> {
            this.Test1();
        }, 500);
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