function log(msg:any)
{
	document.body.innerHTML +=  msg + "<br>\n";

	console.log(msg)
}

var shape = {
	name: "rectangle",
	popup: function()
	{
		log("This inside popup(): " + this + "  name="+ this.name);

		setTimeout(function()
			{
				log("This popup inside setTimeout(): " + this + " name=" + this.name);
			}, 3000);
	}


	lambdaPopup: function()
	{
		log("This inside lambdaPopup(): " + this + "  name="+ this.name);

		setTimeout(()=>
			{
				log("<i>lambda表达式 ()=>{something}或()=>something 相当于js中的函数,它的好处是可以自动将函数中的this附加到上下文中。</i>");
				log("This lambdaPopup inside setTimeout(): " + this + " name=" + this.name);
			}, 5000);
	}
};

shape.popup();
shape.lambdaPopup();