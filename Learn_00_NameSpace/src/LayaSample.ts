import WebGL = Laya.WebGL;
// 程序入口
class GameMain{
    constructor()
    {
         let d3: D3.Base;
        
let sq = new Shapes.Polygons.Square();

console.log(sq);
        Laya.init(600,400, WebGL);
    }
}
new GameMain();