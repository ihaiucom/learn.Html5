function log(msg:any)
{
	document.body.innerHTML +=  msg + "<br>\n";

}

log("Hello编译命令： tsc hello.ts");

function Add(left:any, right:number):number
{
	return left + right;
}

function Area(shape: string, width:number, height: number)
{
	var area = width * height
	return "I'm a " + shape + " witch an area of " + area + "cm squared."
}

log(" 1+2="+Add(1, 2));
log(" '1'+2="+Add('1', 2));
log(Area("rectangle", 30 , 15));