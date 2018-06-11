
function log(msg:any):void
{
    if(typeof(msg) == "object")
    {
        msg = JSON.stringify(msg);
    }
    document.body.innerHTML += msg + "<br>\n";
    console.log(msg);
}


function h1(msg:any):void
{
    document.body.innerHTML += "\n<br><h1>" + msg + "</h1>\n";
    console.log("");
    console.log(msg);
}


function node(msg:any):void
{
    if(typeof(msg) == "object")
    {
        msg = JSON.stringify(msg);
    }
    document.body.innerHTML += "\n<p style='color: #999; background-color: #f3f6fa;'>\n" + msg + "\n</p>\n";
    
    console.log(msg);
}


function pre(msg:any):void
{
    if(typeof(msg) == "object")
    {
        msg = JSON.stringify(msg);
    }
    document.body.innerHTML += "\n<pre style='padding: 0.8rem;overflow: auto;font-size: 0.9rem;line-height: 1.45;border-radius: 0.3rem; word-wrap: normal;background-color: #f3f6fa;border: solid 1px #dce6f0;'>\n" + msg + "\n</pre>\n";
    
    console.log(msg);
}


function error(msg:any):void
{
    if(typeof(msg) == "object")
    {
        msg = JSON.stringify(msg);
    }
    document.body.innerHTML += "\n<pre style='padding: 0.8rem;overflow: auto;font-size: 0.9rem;line-height: 1.45;border-radius: 0.3rem; word-wrap: normal;background-color: #dd6666;border: solid 1px #660000;'>\n" + msg + "\n</pre>\n";
    
    console.error(msg);
}