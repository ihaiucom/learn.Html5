function log(msg:any)
{
	document.body.innerHTML +=  msg + "<br>\n";

	console.log(msg)
}

class Shape
{
	public name:string;
	public x:number;
	private color:string;
	protected clsname = "Shape";

	constructor(name: string, x: number, public y: number, color:string)
	{

		log("[Shape constructor]");
		this.name = name;
		this.x = x;
		this.color = color;
	}

	public shoutout()
	{
		return "[Shape shotout] this.name=" + this.name + ", this.x=" + this.x + ", this.y=" + this.y + ", this.color=" + this.color + " name=" + name;
 	}

 	private a()
 	{
 		log("Shape private a");
 	}

 	protected b()
 	{
 		log("Shape protected b");
 	}


}

class Shape3D extends Shape
{
	volume: number;

	constructor(name: string, x: number,  y: number, color:string, volume: number)
	{
		log("[Shape3D constructor]");
		super(name, x, y, color)
		this.volume = volume;

		this.clsname = "Shape3D";
		log(this.clsname + " " + this.name);

		this.b();
		this.superb();

	}

	protected b()
	{
 		log("Shape3D protected b");
	}

	public superb()
	{
 		log("Shape3D protected superb");
		super.b();
	}




}

var square = new Shape("square", 30, 30, "red");
var square3D = new Shape3D("laya", 10, 20, "blue", 9);

log(square.shoutout());
log(square3D.shoutout());

log("square3D.volume=" + square3D.volume);
square3D.volume = 100;
log("square3D.volume=" + square3D.volume);



