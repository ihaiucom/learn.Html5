var WebGL = Laya.WebGL;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        var d3;
        var sq = new Shapes.Polygons.Square();
        console.log(sq);
        Laya.init(600, 400, WebGL);
    }
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map