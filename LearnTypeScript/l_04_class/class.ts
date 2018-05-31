function log(msg:any)
{
	document.body.innerHTML +=  msg + "<br>\n";

	console.log(msg)
}

class Shape
{
	public port:number = 0;
	public web:string = "爱海游 http://blog.ihaiu.com";
	public arean: number;
	public color: string;
	 name: string;
	public print: any;
	public print2: any;
	public width: number;
	public height: number;

	constructor(name: string, width: number, height: number)
	{
		this.width = width;
		this.height = height;
		this.name = name;
		this.arean = width * height;
		this.color = "pink";


        this.print=()=>{log("<br>\n<b>=> print: name=" + this.name + " this.width=" + this.width + " width=" + width + "<b><br>\n")}
        this.print2= function(){log("<br>\n<b>=> print2: name=" + this.name + " this.width=" + this.width + " width=" + width + "<b><br>\n")}

	}

	shoutout()
	{
		return "color = " + this.color + ",  name=" + this.name + ",  arean = " + this.arean + " port" + this.port; 
	}
}

var square = new Shape("square", 30, 30);
var square2 = new Shape("square2", 20, 20);

log(square.shoutout());

log("");
log("-----------");
log("name:" + square.name);
log("arean:" + square.arean);
log("color:" + square.color);
log("width:" + square.width);
log("height:" + square.height);

square.print();
square.print2();


square2.print();
square2.print2();

log("===========");
log("");

square.name += " 修改"
square.color = "bule";
square.width = 50;
log(square.shoutout());
log("");
log("-----------");
log("name:" + square.name);
log("arean:" + square.arean);
log("color:" + square.color);
log("width:" + square.width);
log("height:" + square.height);

log("");
log("-----------");
log(square2.shoutout());



log("");
square.print();
square.print2();


square2.print();
square2.print2();
