var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
// 程序入口
var GameMain = (function () {
    function GameMain() {
        Laya.init(1136, 640, Laya.WebGL);
        laya.utils.Stat.show(0, 0);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "left";
        Laya.stage.alignV = "top";
        //设置横竖屏
        Laya.stage.screenMode = "horizontal";
        Laya.loader.load([
            { url: "res/Extension@atlas0.png", type: Loader.IMAGE },
            { url: "res/Extension.fui", type: Loader.BUFFER }
        ], Handler.create(this, this.onLoaded));
    }
    GameMain.prototype.onLoaded = function () {
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        fairygui.UIPackage.addPackage("res/Extension");
        fairygui.UIObjectFactory.setPackageItemExtension("ui://Extension/mailItem", MailItem);
        new MainPanel();
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map