function log(msg:any)
{
	document.body.innerHTML +=  msg + "<br>\n";

	console.log(msg)
}

interface Shape
{
	name?: string;
	width: number;
	height: number;
	color?: string;
}

function area(shape: Shape)
{
	var area = shape.width * shape.height;
	return "I'm " + shape.name + " with area " + area + "cm square. color=" + shape.color ; 

}


log(    area( {name: "rectangle", width: 30, height: 15} )   );

log(    area( {name: "square", width: 10, height: 15, color: "bule"} )   );

log(    area( { height: 15, color: "bule"} )   );