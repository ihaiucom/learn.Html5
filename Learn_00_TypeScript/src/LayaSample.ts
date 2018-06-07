import WebGL = Laya.WebGL;
// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(600,400, WebGL);

        setTimeout(()=>{this.TestZK2();}, 500);

        var txt = new Laya.Text(); 
        //设置文本内容
        txt.text = "Hello Layabox";  
        //设置文本颜色为白色，默认颜色为黑色
        txt.color = "#ffffff";
        txt.fontSize = 60;
        txt.bgColor = "#ff0000";
        txt.stroke = 5;//描边为5像素
        txt.strokeColor = "#FFFFFF";  
        txt.pos(60,100);  
        txt.on(Laya.Event.CLICK, this, this.TestVar);

        Laya.stage.addChild(txt);
        Laya.stage.bgColor  = '#23238E';  
    }

    private TestLog()
    {
        h1("测试日志");
        log("hello");
        node("//哈哈");
        pre("var a = 1;");
    }

    private TestZK2()
    {
        let user = {username: "zengfeng", password:"123",
        login:function()
        {
            log(`login: username= ${this.username}`);
        }
    }

    user.login();

        let payer = {name:"曾峰", age:18, qq:593705098}

        let role = {...user, ...payer, roleId:100}
        log(`role.username= ${role.username}`);

        role = {...user, ...payer, roleId:100, username:"zf"}
        log(`role.username= ${role.username}`);
    role.login();

        
        role = {username:"zhm", ...user, ...payer, roleId:100}
        log(`role.username= ${role.username}`);

    }

    private TestZK1()
    {
        let arrA = [1, 2]
        let arrB = [3, 4, 5]
        let arrC = [0, ...arrA, ...arrB, 6]

        log(`arrA= ${arrA}`);
        log(`arrB= ${arrB}`);
        log(`arrC= ${arrC}`);
        log(``);

        function f(...args)
        {
            log(`args= ${args}  length=${args.length}`);
            log(`arguments= ${arguments}`);
            log(``);
        }

        f(1, 2, 3);
        f(arrC);

         let player = {
            id : 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            host:undefined
        };
        
        f(player);
    }



     private TestObjJG10()
    {
        type PlayerType = 
        {
            id:number,
            name:string,
            host?:string
        }

        // 传进去的整个对象是 undefined才有效, 传null会报错
        function f({name, host, ...other} = {name: "zf", host:"zf.com"})
        {
            log(`name=${name}`);
            log(`host=${host}`);
            log(``);
        }

        let player = {
            id : 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            host:undefined
        };

        f(player);

        player.name = "ihaiu";
        player.host = "ihaiu.com";
        f(player);

        
        player.name = null;
        player.host = null;
        f(player);

        
        player.name = undefined;
        player.host = undefined;
        f(player);

        

        f(undefined);
        // f(null);//传null会报错

    }


     private TestObjJG9()
    {
        type PlayerType = 
        {
            id:number,
            name:string,
            host?:string
        }

        function f(name, host="zengfeng75.com", ... other)
        {
            log(`name=${name}`);
            log(`host=${host}`);
            log(``);
        }

        let player = {
            id : 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            host:undefined
        };

        f(player);

        player.name = "ihaiu";
        player.host = "ihaiu.com";
        f(player);

    }

    private TestObjJG8()
    {
        type PlayerType = 
        {
            id:number,
            name:string,
            host?:string
        }

        function f({name, host="zengfeng75.com", ... other} : PlayerType)
        {
            log(`name=${name}`);
            log(`host=${host}`);
            log(``);
        }

        let player = {
            id : 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            host:undefined
        };

        f(player);

        player.name = "ihaiu";
        player.host = "ihaiu.com";
        f(player);

    }

    private TestObjJG7()
    {
        type PlayerType = 
        {
            id:number,
            name:string,
            host?:string
        }

        function f({name, host="zengfeng75.com"} : PlayerType)
        {
            log(`name=${name}`);
            log(`host=${host}`);
            log(``);
        }

        let player = {
            id : 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            host:undefined
        };

        f(player);

        player.name = "ihaiu";
        player.host = "ihaiu.com";
        f(player);

    }
    
    private TestObjJG6()
    {
        let player = {
            id : 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            host:void 0
        };

        function f(info: {name: string, qq?:number})
        {
            let {name, qq = 1001} = info;


            log(`name=${name}`);
            log(`qq=${qq}`);
            log(``);
        }

        f(player);

        let {name: myname, host = "ihaiu.com"} = player;
        
        log(`player.host=${player.host}`);
        log(`myname=${myname}`);
        log(`host=${host}`);
        log(``);

       
    }

    private TestObjJG5()
    {
        let player = {
            id : 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            qq: 593705098
        };

        let {id: myUid, email: myEmail, age, ...other} = player;
        
        log(`player=${player}`);
        log(``);


        log(`myUid=${myUid}`);
        log(`myEmail=${myEmail}`);
        log(`age=${age}`);
        log(`other=${other}`);
    }
    
    private TestObjJG4()
    {
        let player = {
            id : 1,
            name: "zengfeng",
            age: 18,
            level: 10,
            email: "zengfeng75@qq.com",
            web: "http://blog.ihaiu.com",
            qq: 593705098
        };

        let {id, email, age, ...other} = player;
        
        log(`player=${player}`);
        log(``);


        log(`id=${id}`);
        log(`email=${email}`);
        log(`age=${age}`);
        log(`other=${other}`);
    }
    
    private TestObjJG3()
    {
        let a,b;
        ({ a, b } = { a: "baz", b: 101 });
        
        log(`a=${a}`);
        log(`b=${b}`);
    }

    
    
    private TestObjJG2()
    {
        let o = {
            a: "foo",
            b: 12,
            c: "bar"
        };

        o[0] = 1;
        o[1] = 2;


        let [ a, b ] = o as any;

        log(`o=${o}`);
        log(``);

        
        log(`a=${a}`);
        log(`b=${b}`);

    }

    private TestObjJG1()
    {
        let o = {
            a: "foo",
            b: 12,
            c: "bar"
        };
        let { a, b } = o;

        log(`o=${o}`);
        log(``);

        
        log(`a=${a}`);
        log(`b=${b}`);

    }
    
    private TestJG6()
    {
        let [first] = [1, 2, 3, 4];
        log(`first=${first}`);
        log(``);


        let [, second, , , fourth, ... other] = [1, 2, 3, 4,5,6, 8,9];
        log(`second=${second}`);
        log(`fourth=${fourth}`);
        log(`other=${other}`);
    }
    private TestJG5()
    {
        let a,b,c:any;

        [a, b, ...c] = [1, 2, 3, 4, 5];
        log(`a=${a}`);
        log(`b=${b}`);
        log(`c=${c}`);
        log(``);

        
        [a, b, ...c] = ["a", "b", "c"];
        log(`a=${a}`);
        log(`b=${b}`);
        log(`c=${c}`);
        log(``);
    }

    private TestJG4()
    {
        let a,b,c:any;
        [a, ...b] = [];
        
        // a=undefined
        // b=
        log(`a=${a}`);
        log(`b=${b}`);
        log(``);

        // a=1
        // b=2,3,4,5
        [a, ...b] = [1, 2, 3, 4, 5];
        log(`a=${a}`);
        log(`b=${b}`);
        log(``);


        // a=zengfeng
        // b=男,18
        [a, ...b] = ["zengfeng", "男", 18];
        log(`a=${a}`);
        log(`b=${b}`);
        log(``);
        
        [a, b, ...c] = [1, 2, 3, 4, 5];
        log(`a=${a}`);
        log(`b=${b}`);
        log(`c=${c}`);
        log(``);

    }
    
    private TestJG3()
    {
        let info: [string, string, number]  = ["zengfeng", "男", 18];
        let arr = ["zengfeng", "男", 18];
        let [name, sex, age] = info;
        var [n, s, a] = arr;

       
        log(`name=${name}`);
        log(`sex=${sex}`);
        log(`age=${age}`);

        log(``);
        
        log(`n=${n}`);
        log(`s=${s}`);
        log(`a=${a}`);

    }

    private TestJG2()
    {
        let info: [string, string, number]  = ["zengfeng", "男", 18];
        function f( [name, sex, age] : [string, string, number] )
        {
            log(`name=${name}`);
            log(`sex=${sex}`);
            log(`age=${age}`);
        }
        
        f(info);
    }
    
    private TestJG1()
    {
        let input = [1, 2, "zengfeng"];
        let [first, second, name] = input;
        log(first);
        log(second);
        log(name);

        //交互变量
        h1("交互变量");
        [first, second] = [second, first];
        log(first);
        log(second);

    }

    private TestConst2():void
    {
        const Player = {
            id : 1,
            name: "zengfeng",
            age: 18
        };

        // Player = {
        //     id : 1,
        //     name: "zengfeng",
        //     level: 5
        // }

        Player.name = "ihaiu";
        Player.age = 20;
        
        log(Player);
    }


    private TestConst1():void
    {
        const NUM_1 = 100;
        log(NUM_1);
    }


    private TestLet8():void
    {
        for (let i = 0; i < 10 ; i++) 
        {
            setTimeout(function() {
                console.log(i); 
            }, 100 * i);
        }


        function theCityThatAlwaysSleeps() 
        {
            let getCity;

            if (true) {
                let city = "Seattle";
                getCity = function() {
                    return city;
                }
            }

            return getCity();
        }

        log(theCityThatAlwaysSleeps());
    }
    
    private TestLet7():void
    {
        function sumMatrix(matrix: number[][])
        {
            var sum = 0;
            for(let i = 0; i < matrix.length; i ++)
            {
                log(`~~i=${i}`)

                var row = matrix[i];
                for(let i = 0; i < row.length; i ++)
                {
                    log(`row i=${i}`)
                    sum += row[i];
                }
                log(`##i=${i}`)
            }

            // log(`@@i=${i}`)
            return sum;
        }

        var m = [
            [11,12,13],
            [21,22,23],
            [31,32,33],
            [41,42,43],
            ];

        log(`sum = ${sumMatrix(m)}`)
    }


    public myname:String  = "爱海游";
    private TestLet6()
    {
        window["myname"] = "Window全局的";

        log(this.myname);
        function f1()
        {
            log("f1: " + this.myname);
        }

        var f2 = function()
        {
            log("f2: " + this.myname);
        }

        var f3 = ()=>
        {
            log("f3: " + this.myname);
        }

        f1();
        f2();
        f3();
    }
    

    private TestLet5()
    {
        let a = 1;
        let a = 1;

        function f()
        {
            let a = 100;
        }

        function m(x)
        {
            let x;
        }

        function g()
        {
            let y = 1;
            var y = 2;
        }

        // 并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明。
        function ff(condition, x)
        {
            if(condition)
            {
                let x = 100;
                return x;
            }
            return x;
        }

        ff(false, 0); // returns 0
        ff(true, 0);  // returns 100
    }

    private TestLet4()
    {
        function f()
        {
            return a;
        }

        log(f());
        let a = 10;
    }

    private TestLet3()
    {
        var a = 1;
        function f(input:boolean)
        {
            
            a = 100; // 这里的a 将是闭包定义的 var a=1, 将会对上面进行修改

            if(input)
            {
                let a = 10;
            }
            
            log(`f a=${a}`);  // 100. 这里的也是上面定义的 var a=1
        }

        f(true);
        log(a); // a =100, 被f函数修改
    }
    
    private TestLet2()
    {
        var a = 1;
        function f(input:boolean)
        {
            // illegal to use 'a' before it's declared;
            a = 100;
            let a;
            log(`f a=${a}`); 
        }

        f(true);
        log(a);
    }

    private TestLet1()
    {
        function f(input:boolean)
        {
            let a = 100;

            if(input)
            {
                let b = a + 1;
                return b;
            }

            // Error: 'b' doesn't exist here
            // return b;

        }

        log(`f(true) // ${f(true)}`);
        log(`f(false) // ${f(false)}`);

    }


    private TestVar5()
    {
        // for(let i = 0; i < 10; i ++)
        // {
        //     setTimeout(function() {
        //         log(i);
        //     }, 100 * i);
        // }

        function f()
        {
                for(var i = 0; i < 10; i ++)
                {
                    (function(val)
                    {
                        setTimeout(function() { 
                            log(val); 
                        }, 100 * val);
                    })(i);
                    
                }
        } 

        f();
    }

    private TestVar4():void
    {
        var a = 1;
        var a = 2;
        var a = 100;
        log(a);


        function sumMatrix(matrix: number[][], isIn:boolean = false)
        {
            sum = 100;

            log(`--sum=${sum}`)
            if(isIn)
                var sum = 0;

            log(`--sum=${sum}`)

            for(var i = 0; i < matrix.length; i ++)
            {
                log(`~~i=${i}`)

                var row = matrix[i];
                for(var i = 0; i < row.length; i ++)
                {
                    log(`row i=${i}`)
                    sum += row[i];
                }
                log(`##i=${i}`)
            }

            log(`@@i=${i}`)
            return sum;
        }

        var m = [
            [11,12,13],
            [21,22,23],
            [31,32,33],
            [41,42,43],
            ];

        log(`sum = ${sumMatrix(m)}`)
    }

    private TestVar3():void
    {
        var x = 1
        var haha = "haha 1"
        function f(isIn:boolean)
        {
            log(`haha=${haha}`)
            if(isIn)
            {
                var x = 10;
            }

            var haha = "haha"

            return x;
        }

        var x = 100

        log(`f(true); // ${f(true)}`);
        log(`f(false); // ${f(false)}`);
    }

    private TestVar2():void
    {
        h1(`Test`)
        function f()
        {
            var a = 1;
            a = 2;
            var b = g();
            a = 3;
            return b;

            function g()
            {
                return a;
            }
        }

        log(`f(); // ${f()}`);
        
    }

    private TestVar():void
    {
        var a = 10;
        log(a);

        function f()
        {
            var message = "Hello World";
            return message;
        }

        function f2()
        {
            var a = 100;
            return function g()
            {
                var b = a + 1;
                return b;
            }
        }
        
        log(a);

        log(f())

        var gg = f2();
        log(a);

        log(`gg() = ${gg()} `);
        
        log(a);


    }

}





new GameMain();