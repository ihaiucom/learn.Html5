function log(msg) {
    document.body.innerHTML += msg + "<br>\n";
    console.log(msg);
}
function area(shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + "cm square. color=" + shape.color;
}
log(area({ name: "rectangle", width: 30, height: 15 }));
log(area({ name: "square", width: 10, height: 15, color: "bule" }));
log(area({ height: 15, color: "bule" }));
